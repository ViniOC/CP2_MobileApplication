import { StyleSheet, View } from 'react-native';
import Footer from './src/Components/Footer';
import MapPage from './src/Screen/MapPage';
import HomePage from './src/Screen/HomePage';
import DevPage from './src/Screen/DevPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunitiesScreen from './src/Screen/CommunitiesScreen';
import CommunityRegister from './src/Screen/CommunityRegister';

const StackNavigation = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <StackNavigation.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
            <StackNavigation.Screen name="Home" component={HomePage} />
            <StackNavigation.Screen name="Dev" component={DevPage} />
            <StackNavigation.Screen name="MapPage" component={MapPage} />
            <StackNavigation.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
            <StackNavigation.Screen name="CommunityPage" component={CommunityRegister} />
          </StackNavigation.Navigator>
        </NavigationContainer>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, 
  },
});