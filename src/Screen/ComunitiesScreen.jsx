import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import mockLocations from '../mocks/MockLocations';
import NavigationBottom from '../Components/NavigationBottom';

export default function ComunitiesScreen({navigation}) {
    const data = mockLocations;

    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>Necessidades:</Text>
        {item.necessidades.map((n) => (
          <Text key={n.id} style={styles.item}>• {n.name}</Text>
        ))}
      </View>
    );
  
    return (
        <View style={styles.container}>
            <View style={styles.headerLink}>
                <NavigationBottom nameBottom="Go to Map Page" navigation={navigation} namePage="MapPage" />
            </View>
            <TouchableOpacity style={styles.headerLink} onPress={() => solicitarDado(-23.5605, -46.6535)}>
                <Text style={styles.textBottom}>Solicitar Dado</Text>
            </TouchableOpacity>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
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
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 16,
      margin: 12,
      elevation: 4,
    },
    title: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 8 
    },
    subtitle: { 
        fontWeight: 'bold' 
    },
    item: { 
        marginLeft: 8 
    }
});
