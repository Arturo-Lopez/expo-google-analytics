import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

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

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Go Profile"
      />
    </View>
  );
};

export default HomeScreen;
