import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Analytics from "expo-firebase-analytics";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});

const ProfileScreen = () => {
  const navigation = useNavigation();

  // Logs a certain event
  const handlePressLog = () => {
    console.log("Change picture");

    Analytics.logEvent("ChangePicture", {
      screen: "profile",
      purpose: "Change user picture",
    });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Profile</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Go Home" />
      <Button onPress={handlePressLog} title="Change user picture" />
    </View>
  );
};

export default ProfileScreen;
