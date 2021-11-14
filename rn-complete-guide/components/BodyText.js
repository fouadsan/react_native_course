import React from "react";
import { Text, StyleSheet } from "react-native";

function BodyText({ style, children }) {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
