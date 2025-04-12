import { View, FlatList, StyleSheet } from 'react-native'
import mockLocations from '../mocks/MockLocations';
import NavigationBottom from '../Components/NavigationBottom';
import ComunityCard from '../Components/CommunityDetailsCard';

export default function CommunitiesScreen({navigation}) {

    const data = mockLocations;
  
    return (
        <View style={styles.container}>
            <View style={styles.headerLink}>
                <NavigationBottom nameBottom="Go to Map Page" navigation={navigation} namePage="MapPage" />
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ComunityCard item={item} />
                )}
            />
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "#f5f4fa",
    },
    headerLink: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#d8d2ec",
    },
});
