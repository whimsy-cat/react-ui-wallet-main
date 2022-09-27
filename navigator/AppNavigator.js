import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import LegalScreen from "../screens/Legal";
import PhraseScreen from "../screens/PhraseScreen";
import VerifyPhraseScreen from "../screens/VerifyPhraseScreen";
import Welcome from "../screens/Welcome";
import PasscodeScreen from "../screens/PasscodeScreen";
import PasswordSettingScreen from "../screens/PasswordSettingScreen";

import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const Onboarding = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerLeft: (props) => null }}
      />
      <Stack.Screen name="LegalScreen" component={LegalScreen} />
      <Stack.Screen name="PhraseScreen" component={PhraseScreen} />
      <Stack.Screen name="VerifyPhraseScreen" component={VerifyPhraseScreen} />
      <Stack.Screen name="PasscodeScreen" component={PasscodeScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export {
  Onboarding,
};
