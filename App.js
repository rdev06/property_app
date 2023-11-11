import 'react-native-gesture-handler';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNav from './src/RootNav';

const colors = {
  primary: 'purple',
  secondary: 'brown',
  tertiary: 'grey'
}

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: MD3LightTheme,
  reactNavigationDark: MD3DarkTheme,
 })

 const useLightTheme = {...MD3LightTheme, ...LightTheme, ...{colors}};
 const useDarkTheme = {...MD3DarkTheme, ...DarkTheme, ...{colors}};


export default function App() {
  return (
    <NavigationContainer theme={useLightTheme} >
    <PaperProvider theme={useLightTheme}>
    <StatusBar style="auto" />
      <RootNav />
    </PaperProvider>
  </NavigationContainer>
  );
}
