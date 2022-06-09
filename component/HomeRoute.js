import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Details from "./Details";
import tailwind from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function HomeRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => (
                        <View
                            style={tailwind`bg-white pt-10 pb-2 flex-row items-center justify-between px-2 `}
                        >
                            <Ionicons
                                name="ios-menu"
                                size={24}
                                color="black"
                                style={tailwind`text-2xl`}
                            />
                            <Text style={tailwind`text-2xl`}>Discover</Text>
                            <EvilIcons
                                name="search"
                                size={24}
                                color="black"
                                style={tailwind`text-3xl`}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    );
}
