import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Property from './Property/Property';
import Teenant from './Teenant/Teenant';
import Maintenance from './Maintenance/Maintenance';
import Enquiry from './Enquiry/Enquiry';
import { Badge } from 'react-native-paper';
import Unit from './Unit/Unit';
import { useContext } from 'react';
import { HomeContext } from '../home.store';
import { useFocusEffect } from '@react-navigation/native';
import PropertyDetail from './PropertyDetail/PropertyDetail';

const Tab = createBottomTabNavigator();

function LandlordTab() {
  const [setRootHeaderShown] = useContext(HomeContext);
  useFocusEffect(() => setRootHeaderShown(true));
  return (
    <Tab.Navigator
      initialRouteName='Property'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Property':
              iconName = focused
                ? 'office-building'
                : 'office-building-outline';
              break;
            case 'Teenant':
              iconName = focused ? 'filter' : 'filter-outline';
              break;
            case 'Maintenance':
              iconName = focused ? 'wrench' : 'wrench-outline';
              break;
            case 'Enquiry':
              iconName = focused
                ? 'arrow-down-bold'
                : 'arrow-down-bold-outline';
              break;
          }
          return (
            <>
              <Icon name={iconName} size={size} color={color} />
              {route.name === 'Enquiry' && (
                <Badge
                  visible={true}
                  size={20}
                  style={{ position: 'absolute', top: -5, right: -5 }}
                >
                  3
                </Badge>
              )}
            </>
          );
        }
      })}
    >
      <Tab.Screen name='Property' component={Property} />
      <Tab.Screen name='Teenant' component={Teenant} />
      <Tab.Screen name='Maintenance' component={Maintenance} />
      <Tab.Screen name='Enquiry' component={Enquiry} />
    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator();


export default function LandLord(){
  return (
    <Stack.Navigator
    initialRouteName='Root'
    >
      <Stack.Screen name='Root' component={LandlordTab} options={{ headerShown: false }} />
      <Stack.Screen name='LLPropertyDetail' component={PropertyDetail} options={{title: 'Property Detail'}} />
      <Stack.Screen name='Unit' component={Unit} />
    </Stack.Navigator>
  );
}