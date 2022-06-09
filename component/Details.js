import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Nav from "./Nav";
import { Ionicons } from "@expo/vector-icons";

export default function Details({ route, navigation }) {
    const item = route.params.item;

    return (
        <ScrollView style={tailwind`bg-white  `}>
            <Nav />
            <View style={tailwind`w-60 h-50 bg-pink-200 absolute  `}>
                <Pressable
                    style={tailwind`mt-10 flex-row ml-3 `}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={24} color="black" />
                    <Text style={tailwind`text-2xl text-center `}>Beauty</Text>
                </Pressable>
            </View>

            <View style={tailwind`bg-white mt-3 mx-5 p-3 z-20 `}>
                <Image
                    source={{ uri: item.image }}
                    style={[
                        tailwind`bg-pink-200 `,
                        {
                            width: 360,
                            height: 210,
                            resizeMode: "contain",
                        },
                    ]}
                />
                <Text style={tailwind`text-3xl font-bold capitalize my-3`}>
                    {item.title}
                </Text>
                <View style={tailwind`flex-row items-center mb-4`}>
                    <Image
                        style={[
                            tailwind` rounded-full mr-2`,
                            { width: 20, height: 20 },
                        ]}
                        source={{
                            uri: item.profileImg,
                        }}
                    />
                    <Text style={tailwind`text-gray-500 text-base capitalize`}>
                        {item.name}
                    </Text>
                    <Text style={tailwind`text-gray-400 text-base pl-3`}>
                        {item.minute}
                    </Text>
                </View>
                <View>
                    <Text style={tailwind`text-base text-gray-500 mb-4`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui animi deserunt aut repellendus id quibusdam ab
                        provident, tempore corporis earum. Quaerat mollitia amet
                        deserunt sed eos.
                    </Text>
                    <Text style={tailwind`mb-4 text-base text-gray-500`}>
                        Corporis, magnam laudantium dolorem aut deleniti,
                        perferendis facilis consectetur sunt eos repellendus,
                    </Text>
                    <Text style={tailwind` text-base text-gray-500`}>
                        totam veritatis blanditiis ea consequuntur natus
                        distinctio? Nisi tenetur tempore officiis rerum
                        voluptatem inventore similique autem rem perferendis
                        quia praesentium illum cupiditate sed alias, asperiores
                        esse aliquam. Odit deleniti, dolorum nisi, similique
                        officia eos ea, nobis itaque consequuntur maiores
                        corrupti est. Magni qui suscipit quaerat ad tempore enim
                        rem exercitationem aliquam temporibus dolore mollitia
                        voluptatem ipsam sunt quae eaque assumenda, recusandae
                        voluptatibus.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
