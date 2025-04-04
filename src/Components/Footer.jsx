import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
    justifyContent: "center", // Centraliza o conteúdo
    alignItems: "center", // Alinha verticalmente
    padding: 15,
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});