import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropertyList from './PropertyList/PropertyList';
import PropertyFilter from './PropertyFilter/PropertyFilter';
import WishList from './WishList/WishList';
import Scheduled from './Scheduled/Scheduled';
import { useState } from 'react';
import { AmmenityContext } from './store';


const Tab = createBottomTabNavigator();

const initialData = [
  { label: 'Balcony', icon: 'balcony', selected: true },
  { label: 'Basement', icon: 'wheel-barrow', selected: false },
  { label: 'Bike Parking', icon: 'motorbike', selected: false },
  { label: 'Cable TV', icon: 'cast-variant', selected: true }
];

export default function Marketplace() {
  const [ammenity, setAmmenity] = useState(initialData);


  return (
    <AmmenityContext.Provider value={[ammenity, setAmmenity]}>
    <Tab.Navigator
    initialRouteName='PropertyList'
    screenOptions={({route})=>({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';
        switch (route.name) {
          case 'PropertyList':
            iconName =  focused ? 'office-building': 'office-building-outline'
            break;
          case 'PropertyFilter':
            iconName = focused ? 'filter' : 'filter-outline';
            break;
          case 'WhishList':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
          case 'VisitScheduled':
            iconName = focused ? 'calendar-month' : 'calendar-month-outline';
            break;
        }
        return <Icon name={iconName} size={size} color={color} />;
      }
    })}
    >
      <Tab.Screen name='PropertyList' component={PropertyList} />
      <Tab.Screen name='PropertyFilter' component={PropertyFilter} />
      <Tab.Screen name='WhishList' component={WishList} />
      <Tab.Screen name='VisitScheduled' component={Scheduled} />
    </Tab.Navigator>
    </AmmenityContext.Provider>
  );
}
