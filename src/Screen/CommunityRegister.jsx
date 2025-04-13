
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'
import mockLocations from '../mocks/MockLocations'
import { findAddressByCep, FindLatitudeAndLongitude } from '../services/GeolocationApis';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CommunityDetailsCard from '../Components/CommunityDetailsCard'

export default function CommunityRegister() {
    const dataMock = mockLocations

    const [communityNeed, setCommunityNeed] = useState("");
    const [address, setAddress] = useState({
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        number: ""
    });
    const [community, setCommunity] = useState({
        name: "",
        address: "",
        needs: []
    });

    const addCommunityNeeds = (need) => {
        setCommunity({
            ...community,
            needs: [...community.needs, { id: community.needs.length + 1, name: need }]
        });
    }

    function formattedAddress(address) {
        return `${address.logradouro}, ${address.number} - ${address.bairro}, ${address.cidade}, ${address.estado}`;
    }

    const handleFindAddress = async () => {
        const communityAddress = await findAddressByCep(address.number, address.cep);
        setAddress(communityAddress);
        setCommunity({...community, address: formattedAddress(communityAddress)});
    };

    const handleSaveCommunity = async () => {
        if (
            !community.name ||
            !address.cep ||
            !address.number ||
            community.needs.length === 0
          ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
          }
        const {latitude, longitude} = await FindLatitudeAndLongitude(address);
        const newCommunity = {
            id: dataMock.length + 1,
            latitude: latitude,
            longitude: longitude,
            name: community.name,
            address: community.address,
            needs: community.needs
        };
        console.log(newCommunity);
        dataMock.push(newCommunity);
        setCommunity({
            name: "",
            address: "",
            needs: []
        });
        setAddress({
            logradouro: "",
            bairro: "",
            cidade: "",
            estado: "",
            cep: "",
            number: ""
        });
        setCommunityNeed("");
        console.log("Comunidade salva com sucesso!");
    }


  
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Comunidade</Text>
            <TextInput
                placeholder="Nome da Comunidade"
                style={styles.textInput}
                value={community.name}
                onChangeText={(text) => setCommunity({...community, name: text})}
            />
                
            <TextInput
                placeholder="Número"
                style={styles.textInput}
                keyboardType='numeric'
                value={address.number}
                onChangeText={(text) => setAddress({ ...address, number: text })}
            />
            <View style={styles.inputWithIcon}>
                <TextInput
                    placeholder="CEP"
                    value={address.cep}
                    keyboardType='numeric'
                    style={[styles.textInput, styles.textInputWithIcon]}
                    onChangeText={(text) => setAddress({ ...address, cep: text })}
                />
                <TouchableOpacity onPress={handleFindAddress}>
                    <Ionicons name="search-outline" size={32} color="#2196F3" />
                </TouchableOpacity>

            </View>
            
            <View style={styles.inputWithIcon}>
                <TextInput
                    placeholder='Necessidade da Comunidade'
                    style={[styles.textInput, styles.textInputWithIcon]}
                    value={communityNeed}
                    onChangeText={(text) => setCommunityNeed(text)}
                />
                <TouchableOpacity onPress={() => addCommunityNeeds(communityNeed)}>
                    <Ionicons name="add-circle-outline" size={32} color="#2196F3" />
                </TouchableOpacity>
            </View>
            {
                community.address != "" &&
                    <CommunityDetailsCard item={community} style={styles.card}/>
            }

            
            <TouchableOpacity style={styles.bottom} onPress={handleSaveCommunity}>
                <Ionicons name="checkmark-circle-outline" size={32} color="#4CAF50" />
                <Text>Salvar Comunidade</Text>
            </TouchableOpacity>
           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f4fa",
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#d8d2ec",
        borderRadius: 8,
        backgroundColor: "#ffffff",
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    inputWithIcon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginBottom: 10,
        width: "100%"
    },
    textInputWithIcon: {
        flexGrow: 1,
    },
    bottom: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: "#ece9f6",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
    },

});