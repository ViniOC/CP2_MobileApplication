import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import FeatureCard from '../Components/FeatureCard'
import NavigationBottom from '../Components/NavigationBottom'



export default function HomePage({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.headerLinks}>
                <NavigationBottom nameBottom="Pagina dos Devs" navigation={navigation} namePage="Dev" />
                <NavigationBottom nameBottom="Comunidades Cadastradas" navigation={navigation} namePage="Communities" />
                <NavigationBottom nameBottom="Cadastro de Comunidade" navigation={navigation} namePage="CommunityRegister" />
            </View>

            <Text style={styles.name}>Solidarize</Text>

            <Image
                source={require('../../assets/Img-screen-home.jpg')}
                style={styles.image}
            />
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
            
        </ScrollView>
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
    name: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        textTransform: "uppercase",
        color: "#4c3f8c",
    },
    image: { 
        width: '95%', 
        height: 200, 
        marginTop: 20, 
        marginHorizontal: 10, 
        borderRadius: 10 
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