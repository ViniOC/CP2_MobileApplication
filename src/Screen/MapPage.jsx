import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import getActualPosition from '../services/LocationService';
import mockLocations from "../mocks/mockLocations";

export default function MapPage() {

    const [location, setLocation] = useState(null);


    const updateLocation = async () => {
        const currentCoords = await getActualPosition();
        if (
        currentCoords &&
        (!location ||
            location.latitude !== currentCoords.latitude ||
            location.longitude !== currentCoords.longitude)
        ) {
        setLocation(currentCoords);
        }
    };

    useEffect(() => {
        updateLocation();
    }, []);
  

    const region = location && {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    return (
        <View style={styles.container}>
          { region ?
            <MapView
            style={{ flex: 1 }}
            initialRegion={region}
            >
          
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude
              }}
              title="Você está aqui"
              description="Sua localização atual"
            >
              <Image
                source={require('../../assets/pessoa.png')}
                style={{ width: 30, height: 30 }}
              />
            </Marker>
            {mockLocations.map((item) => 
                <Marker
                    key={item.id}
                    coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                    }}
                    title={item.title}
                    description={`Location ID: ${item.id}`}
                >
                    <Image
                    source={item.image}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                    />
                </Marker>
            )}
    
            </MapView>
          : 
          <ActivityIndicator style={{}} size="large" color="#000" />
          }
        </View>
      );
    }
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    },
});