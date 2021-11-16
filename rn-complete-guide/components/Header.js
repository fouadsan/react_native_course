import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

function Header({ title }) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIOS: {
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "#fff",
  },
});

export default Header;
