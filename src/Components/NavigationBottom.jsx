import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function NavigationBottom({nameBottom, navigation, namePage}) {
  return(
    <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate(namePage)}>
        <Text style={styles.textBottom}>{nameBottom}</Text>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    bottom: {
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: "#ece9f6"
    },
    textBottom: {
        fontSize: 16,
        textAlign: "center",
        color: "black"
    },
})