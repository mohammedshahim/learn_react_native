import { StyleSheet, Text, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.vanilaWhite,
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: Colors.vanilaWhite,
    padding: 12,
    maxWidth: "80%",
  },
});
