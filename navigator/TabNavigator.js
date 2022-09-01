import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  PortfolioStackNavigator,
  DiscoverStackNavigator,
  DAppsStackNavigator,
  SettingsStackNavigator,
} from "./AppNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          headerShown: false,
          // tabBarLabel: navigation.isFocused() ? route.name : "",
        };
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={PortfolioStackNavigator}
        options={({ route }) => ({
          tabBarOptions: {
            activeTintColor: "#000",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="shield-checkmark"
                size={28}
                color={tabInfo.focused ? "#3175BD" : "#656565"}
              />
            );
          },
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            if (
              routeName === "AddCustomTokenScreen" ||
              routeName === "RecieveTokenScreen" ||
              routeName === "SearchRecieveTokensScreen" ||
              routeName === "SendTokenFormScreen" ||
              routeName === "SwapScreen" ||
              routeName === "ImportTokensScreen" ||
              routeName === "BuyTokensScreen"
            ) {
              return { display: "none" };
            }

            return true;
          })(route),
        })}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverStackNavigator}
        options={{
          tabBarOptions: {
            activeTintColor: "#000",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="compass"
                size={28}
                color={tabInfo.focused ? "#3175BD" : "#656565"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="DApps"
        component={DAppsStackNavigator}
        options={{
          tabBarOptions: {
            activeTintColor: "#000",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="grid"
                size={28}
                color={tabInfo.focused ? "#3175BD" : "#656565"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={({ route }) => ({
          tabBarOptions: {
            activeTintColor: "#000",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="settings"
                size={28}
                color={tabInfo.focused ? "#3175BD" : "#656565"}
              />
            );
          },
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            if (
              routeName === "PriceAlertsScreen" ||
              routeName === "SecurityScreen" ||
              routeName === "PushNotificationsScreen" ||
              routeName === "WalletsScreen" ||
              routeName === "WalletEditScreen"
            ) {
              return { display: "none" };
            }

            return true;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

{
  /* {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#f69b31' },
  } */
}
