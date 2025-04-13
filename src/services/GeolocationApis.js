import axios from "axios";

export async function FindLatitudeAndLongitude(address) {
    const addressFormated = `${address.number}+${address.logradouro}+${address.cep}`
    const url = `https://api-v2.distancematrix.ai/maps/api/geocode/json?address=${addressFormated}&key=${process.env.EXPO_PUBLIC_API_KEY}`;
    try {
        const response = await axios.get(url);
        const data = response.data.result[0].geometry.location;
        const lat = data.lat;
        const lng = data.lng;
        const geometryLocation = {"latitude": lat, "longitude":lng}
        return geometryLocation;
    } catch (error) {
        console.error(error);
    }  
}

export async function findAddressByCep(number, cep) {
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        const address = {
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
            cep: data.cep,
            number: number
        };
        return address
    } catch (error) {
        console.error(error);
    }
}