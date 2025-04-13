import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import FeatureCard from '../Components/FeatureCard'
import NavigationBottom from '../Components/NavigationBottom'



export default function HomePage({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.headerLinks}>
                <NavigationBottom nameBottom="DevPage" navigation={navigation} namePage="Dev" />
                <NavigationBottom nameBottom="Go to CommunitiesScreen" navigation={navigation} namePage="CommunitiesScreen" />
                <NavigationBottom nameBottom="Register your community" navigation={navigation} namePage="CommunityPage" />
                <NavigationBottom nameBottom="Go to Map Page" navigation={navigation} namePage="MapPage" />
            </View>
            <Text style={styles.title}>Conectando Ajuda a Quem Precisa</Text>
            <Text style={styles.subtitle}>Voluntários, ONGs e comunidades juntos por um mundo melhor</Text>
            <View style={styles.featureCards}>
                <FeatureCard
                    icon="map"
                    title="Encontre comunidades próximas"
                    description="Veja no mapa quem está precisando de ajuda perto de você"
                    />
                <FeatureCard
                    icon="clipboard"
                    title="Ver necessidades"
                    description="Acesse listas com alimentos, roupas, produtos de higiene etc."
                />
                <FeatureCard
                    icon="heart"
                    title="Cadastrar doação"
                    description="Marque o que deseja doar e envie para quem precisa"
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f4fa",
    },
    headerLinks: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#d8d2ec",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    bottom: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: "#ece9f6"
    },
    textBottom: {
        fontSize: 16,
        textAlign: "center",
        color: "black"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    featureCards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 3,
        margin: 3
    },

})