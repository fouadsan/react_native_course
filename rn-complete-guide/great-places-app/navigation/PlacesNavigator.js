import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import {
  PlacesListScreen,
  PlaceDetailScreen,
  NewPlaceScreen,
  MapScreen,
  PlacesListScreenOptions,
  NewPlaceScreenOptions,
  PlaceDetailScreenOptions,
  MapScreenOptions,
} from "../screens";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  //   headerTitleStyle: {
  //     fontFamily: "open-sans-bold",
  //   },
  //   headerBackTitleStyle: {
  //     fontFamily: "open-sans",
  //   },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const PlacesStackNavigator = createNativeStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <PlacesStackNavigator.Screen
        name="PlacesList"
        component={PlacesListScreen}
        options={PlacesListScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={PlaceDetailScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={NewPlaceScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={MapScreenOptions}
      />
    </PlacesStackNavigator.Navigator>
  );
};
