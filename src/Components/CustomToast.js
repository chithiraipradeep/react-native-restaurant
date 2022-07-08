import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from '../Theme/Color';

const CustomToast = (props) => {
    const { text1} = props;
    return (
        <View style={styles.container}>
            <View style={styles.leftWrapper}>
                <Text style={styles.text}>{text1}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.Primary,
        width: "100%",
        margin: 10,
        flexDirection: "row",
        padding: 15,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftWrapper: {
        alignItems: "center",
    },
    text: {
        marginLeft: 5,
        color: Color.White,
        fontSize: 17,
        fontWeight:'bold',
        letterSpacing:0.5
    }
});

export default CustomToast;
