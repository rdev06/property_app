import { useContext } from 'react';
import { View, Text } from 'react-native';
import { HomeContext } from '../../home.store';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PropertyContext } from '../Landlord.store';
import Detail from './Detail';
import Units from './Units';



const Tab = createMaterialTopTabNavigator();

export default function PropertyDetail({ propertyId, navigation }) {
  const [setRootHeaderShown] = useContext(HomeContext);
  useFocusEffect(() => setRootHeaderShown(false));
  return (
    <PropertyContext.Provider value={propertyId}>
    <Tab.Navigator>
      <Tab.Screen name='Detail' component={Detail} />
      <Tab.Screen name='Units' component={Units} />
    </Tab.Navigator>
    </PropertyContext.Provider>
  );
}