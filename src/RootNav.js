import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat';
import Notification from './pages/Notification/Notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OverLap from './OverLap';
import { HomeHeader } from './pages/Home/Component/HomeHeader';
import { CategoryHome } from './pages/Home/HomeConstant';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerStack() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const [homeType, setHomeType] = useState(CategoryHome.Marketplace);
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'front',
        drawerStyle: isLargeScreen && { width: '10%' }
      }}
    >
      <Drawer.Screen name='Home' component={Home(homeType)} options={{headerTitle: HomeHeader(homeType, setHomeType), headerTitleAlign: 'center'}} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Chat' component={Chat} />
      <Drawer.Screen name='Notification' component={Notification} />
    </Drawer.Navigator>
  );
}


export default function RootNav() {
  return (
    <Stack.Navigator
    initialRouteName='Root'
    >
      <Stack.Screen name='Root' component={DrawerStack} options={{ headerShown: false }} />
      <Stack.Screen name='OverLap' component={OverLap} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}