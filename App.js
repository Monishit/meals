import * as React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safe-area.component";

import R_Home from "./src/features/restaurents/screens/R_Home";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restautants/restaurants.context";

function SettingsScreen() {
  return (
    <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function MapScreen() {
  return (
    <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-settings" : "ios-settings-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Restaurants"
              component={R_Home}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
