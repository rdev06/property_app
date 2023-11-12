import 'react-native-gesture-handler';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNav from './src/RootNav';

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
