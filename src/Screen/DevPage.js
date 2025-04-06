import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


export default function DevPage() {
    return(
        <View>
            <Text>Dev Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLinks: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    bottom: {
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderTopColor: "#ccc",
        marginBottom: 10,
    }

})