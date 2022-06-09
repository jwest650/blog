import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "twrnc";
import Route from "./component/Route";

export default function App() {
    return (
        <View style={styles.container}>
            <Route />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
