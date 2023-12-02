import 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './src/pages/Profile/Profile';
import Chat from './src/pages/Chat/Chat';
import Notification from './src/pages/Notification/Notification';
import Home from './src/pages/Home/Home';

[MD3LightTheme, MD3DarkTheme].forEach(e => {
  e.colors.primary = 'purple';
  e.colors.secondary = 'brown';
  e.colors.tertiary = 'grey';
})


const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: MD3LightTheme,
  reactNavigationDark: MD3DarkTheme,
 })

 const useLightTheme = {...MD3LightTheme, ...LightTheme};
 const useDarkTheme = {...MD3DarkTheme, ...DarkTheme};


 const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer theme={useLightTheme} >
    <PaperProvider theme={useLightTheme}>
    <StatusBar style="auto" />
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'front',
        drawerStyle: isLargeScreen && { width: '10%' }
      }}
    >
      <Drawer.Screen name='Home' component={Home} options={{headerShown: false}} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Chat' component={Chat} />
      <Drawer.Screen name='Notification' component={Notification} />
    </Drawer.Navigator>
    </PaperProvider>
  </NavigationContainer>
  );
}