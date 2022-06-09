import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
    {
        image: "https://www.pngmart.com/files/8/Health-PNG-Image-HD.png",
        title: "Does dry in january actually improve a your health?",
        profileImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ5Ysh_J7_lcGztBLeGTenezYaWt39DsrEg&usqp=CAU",
        name: "Subash Sundra",
        minute: ".4 min read",
    },
    {
        image: "https://www.pngmart.com/files/3/Pink-Roses-Flowers-Bouquet-PNG-Picture.png",
        title: "how to seem like you always have your shot together",
        profileImg:
            "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
        name: "alban gbabin",
        minute: ".4 min read",
    },
    {
        image: "https://www.pngmart.com/files/1/Cool-Skull-Tattoo-Design-Drawing-PNG.png",
        title: "you do hire a designer to make something ",
        profileImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvy24PzneV-ktjESIW1zsShu-rOtoSiS_Rw&usqp=CAU",
        name: "rico brown",
        minute: ".4 min read",
    },
    {
        image: "https://www.pngmart.com/files/21/Tech-PNG-Image.png",
        title: "how to be the really good at coding and be cool",
        profileImg:
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Image.png",
        name: "dan abramov",
        minute: ".4 min read",
    },
];

export default function Home() {
    return (
        <SafeAreaView style={tailwind`flex-1`}>
            <FlatList
                con
                data={data}
                renderItem={({ item }) => <Item item={item} />}
            />
        </SafeAreaView>
    );
}

function Item({ item }) {
    const { navigate } = useNavigation();
    return (
        <Pressable
            style={tailwind`bg-white mb-2 h-35 mx-3 `}
            onPress={() => navigate("Details", { item })}
        >
            <View style={tailwind`w-20 h-25 bg-pink-200 absolute`} />
            <View style={tailwind` h-30 m-2 flex-row bg-white p-2  `}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={[
                        tailwind`h-full w-22 bg-pink-300`,
                        { resizeMode: "contain" },
                    ]}
                />
                <View style={tailwind`flex-1 ml-4 justify-between`}>
                    <Text
                        style={tailwind`text-2xl capitalize mb-2  font-bold text-gray-500`}
                    >
                        {item.title}
                    </Text>
                    <View style={tailwind`flex-row items-center`}>
                        <Image
                            style={[
                                tailwind` rounded-full mr-2`,
                                { width: 20, height: 20 },
                            ]}
                            source={{
                                uri: item.profileImg,
                            }}
                        />
                        <Text
                            style={tailwind`text-gray-500 text-base capitalize`}
                        >
                            {item.name}
                        </Text>
                        <Text style={tailwind`text-gray-400 text-base pl-3`}>
                            {item.minute}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
