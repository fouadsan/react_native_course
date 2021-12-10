import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { HeaderButton, PlaceItem } from "../components";
import * as placesActions from "../store/places-actions";

function PlacesListScreen(props) {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
}

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButton
        iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
        iconSize={23}
        onPress={() => {
          navData.navigation.navigate("NewPlace");
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
