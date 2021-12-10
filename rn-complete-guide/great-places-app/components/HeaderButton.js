import React from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const HeaderButton = ({ iconName, iconSize, onPress }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View>
      <ButtonComponent onPress={onPress}>
        <View>
          <Ionicons
            name={iconName}
            size={iconSize}
            color={Platform.OS === "android" ? "white" : Colors.primary}
          />
        </View>
      </ButtonComponent>
    </View>
  );
};

export default HeaderButton;
