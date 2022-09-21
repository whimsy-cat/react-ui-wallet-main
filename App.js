import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNavigator, { PortfolioStackNavigator } from "./navigator/AppNavigator";
import Store from "./reducers/store"

const App = () => {
  return (
    <Store>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Store>
  );
};

export default App;
