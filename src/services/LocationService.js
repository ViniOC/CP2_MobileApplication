import * as Location from 'expo-location';

const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão negada');
      return;
    }
  }

export default getActualPosition = async () => {
    await requestLocationPermission();
    let currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
      maximumAge: 0,
    });
    return currentLocation.coords;
  }