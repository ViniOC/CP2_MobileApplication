import { View, Image, StyleSheet, Text } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Image style = {styles.image} source = {require('../Image/header.png')}/>
            <Text style={styles.text}>Solidarize</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#e01d5e",
        justifyContent: "center",
        gap: 20,
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
        marginTop: 30,

    },
    image: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        fontFamily: "Roboto",
        textTransform: "uppercase",
    },
});