import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


export default function HomePage({navigation}) {
    return(
        <View>
            <View style={styles.headerLinks}>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('MapPage')}>
                    <Text>Go to Map Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('Dev')}>
                    <Text>DevPage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('MapPage')}>
                    <Text>Go to Map Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('MapPage')}>
                    <Text>Go to Map Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom} onPress={() => navigation.navigate('MapPage')}>
                    <Text>Go to Map Page</Text>
                </TouchableOpacity>
            </View>
            <Text>Home Page</Text>
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