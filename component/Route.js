import { View, Text } from "react-native";
import React from "react";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tailwind from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Favourite from "./Favourite";
import User from "./User";
import Setting from "./Setting";
import Details from "./Details";
import HomeRoute from "./HomeRoute";
import Folder from "./Folder";
const Tab = createBottomTabNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#ff2a00",
                }}
            >
                <Tab.Screen
                    name="HomeRoute"
                    component={HomeRoute}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Folder"
                    component={Folder}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="folder-open-o"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favourite"
                    component={Favourite}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                name="favorite-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={User}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="user" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="setting" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
