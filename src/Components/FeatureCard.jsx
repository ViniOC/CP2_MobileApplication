import { View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function FeatureCard({icon, title, description}){ 
  return(
    <View style={styles.card}>
        <Ionicons name={icon} size={32} color="#2196F3" />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 180,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#d8d2ec"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
    },
})