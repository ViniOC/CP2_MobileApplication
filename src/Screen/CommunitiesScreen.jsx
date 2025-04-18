import { View, FlatList, StyleSheet, Image } from 'react-native'
import mockLocations from '../mocks/MockLocations';
import NavigationBottom from '../Components/NavigationBottom';
import CommunityDetailsCard from '../Components/CommunityDetailsCard';

export default function CommunitiesScreen({navigation}) {

    const data = mockLocations;
  
    return (
        <View style={styles.container}>
            <View style={styles.headerLink}>
                <NavigationBottom nameBottom="Mapa" navigation={navigation} namePage="MapPage" />
            </View>
            <Image
                source={require('../../assets/community-registered.jpg')}
                style={styles.image}
            />
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CommunityDetailsCard item={item} />
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
    image: { 
        width: '95%', 
        height: 200, 
        marginVertical: 20, 
        marginHorizontal: 10, 
        borderRadius: 10
    },
});
