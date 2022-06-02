import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Country({ country }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>
                country Name: {country.name.common}
            </Text>
            <Image
                source={{
                    uri: `${country.flags.png}`,
                }}
                style={{ width: 200, height: 200 }}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});