import { View, Text, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Folder() {
    return (
        <View style={tailwind`flex-1 bg-white`}>
            <Image
                style={{ width: "100%", height: "100%", resizeMode: "center" }}
                source={{
                    uri: "https://icon-library.com/images/not-found-icon/not-found-icon-10.jpg",
                }}
            />
        </View>
    );
}
