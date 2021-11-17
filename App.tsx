import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Analytics from "expo-firebase-analytics";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/HomeScreen";
import ProfileScreen from "./src/ProfileScreen";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer
      // Handle loggin the current screen
      onStateChange={(navState) => {
        if (!navState) return undefined;

        const route = navState.routes[navState.index];

        if (!route.name) return undefined;

        const currentScreen = route.name;

        console.log("Current Screen: ", currentScreen);

        Analytics.setCurrentScreen(currentScreen);
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
