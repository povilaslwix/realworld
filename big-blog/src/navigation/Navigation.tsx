import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import { screenOptions } from "./screen-options";


const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
      </Stack.Navigator>
  );
}