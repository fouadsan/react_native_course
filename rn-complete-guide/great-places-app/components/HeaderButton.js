import React from "react";
import { Platform, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "/../constants/Colors";

const HeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

export default HeaderButton;
