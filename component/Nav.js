import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Nav() {
    return (
        <View
            style={tailwind`bg-white pt-10 flex-row items-center justify-end px-3  `}
        >
            <View style={tailwind`flex-row `}>
                <MaterialIcons
                    name="favorite-outline"
                    size={24}
                    color={"black"}
                    style={tailwind`mx-2`}
                />
                <Ionicons
                    name="headset-outline"
                    size={24}
                    color="black"
                    style={tailwind`mx-2`}
                />
                <AntDesign
                    name="sharealt"
                    size={24}
                    color="black"
                    style={tailwind`mx-2`}
                />
            </View>
        </View>
    );
}
