import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './src/Screen/HomePage';
import DevPage from './src/Screen/DevPage';
import MapPage from './src/Screen/MapPage';
import CommunitiesScreen from './src/Screen/CommunitiesScreen';
import CommunityRegister from './src/Screen/CommunityRegister';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }}/>
      <Stack.Screen name="MapPage" component={MapPage} options={{ title: 'Mapa' }} />
      <Stack.Screen name="Communities" component={CommunitiesScreen} options={{title: "Comunidades Cadastradas"}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'home-outline';

              if (route.name === 'StackHome') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Communities') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'Dev') {
                iconName = focused ? 'code-slash' : 'code-slash-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen name="StackHome" component={HomeStack} options={{headerShown: false, title: "Home"}}/>
          <Tab.Screen name="CommunityRegister" component={CommunityRegister} options={{ title: 'Cadastro de Comunidade' }}/>
          <Tab.Screen name="Dev" component={DevPage} options={{title: "Pagina dos Devs"}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
});