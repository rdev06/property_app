import { Appbar } from 'react-native-paper';
import { View, Dimensions } from 'react-native';
import PropertyDetail from './pages/Home/Marketplace/PropertyDetail/PropertyDetail';

const { width, height } = Dimensions.get('window');

export default function OverLap({ route, navigation }) {
  if (!route?.params?.use) {
    route.params = { use: 'PropertyDetail', meta: {} };
  }
  const { use, meta } = route.params;
  return (
    <View style={{height}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={use} />
      </Appbar.Header>
      {use === 'PropertyDetail' && <PropertyDetail {...meta} />}
    </View>
  );
}
