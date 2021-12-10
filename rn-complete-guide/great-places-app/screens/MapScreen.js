import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { HeaderButton } from "../components";

function MapScreen(props) {
  let initialLocation;
  let readonly = false;
  if (props.route.params) {
    initialLocation = props.route.params.initialLocation;
    readonly = props.route.params.readonly;
  }
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      // could show an alert!
      return;
    }
    props.navigation.navigate("NewPlace", {
      pickedLocation: selectedLocation,
    });
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({ saveLocation: savePickedLocationHandler });
  }, [savePickedLocationHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
}

export const screenOptions = (navData) => {
  let saveFn;
  // let readonly;
  // if (navData.route.params) {
  //   saveFn = navData.route.params.saveLocation;
  //   readonly = navData.route.params.readonly;
  // }
  // if (readonly) {
  //   return;
  // }
  return {
    headerTitle: "Map Screen",
    headerRight: () => (
      <HeaderButton
        iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
        iconSize={23}
        onPress={saveFn}
      />
    ),
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
