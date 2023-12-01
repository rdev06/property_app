import { Appbar } from 'react-native-paper';
import { View, Dimensions } from 'react-native';
import PropertyDetail from './pages/Home/Marketplace/PropertyDetail/PropertyDetail';
import DoSchedule from './pages/Home/Component/DoSchedule';

const { width, height } = Dimensions.get('window');

export default function OverLap({ route, navigation }) {
  if (!route?.params?.use) {
    route.params = { use: 'DoSchedule', meta: {} };
  }
  const { use, meta } = route.params;
  return (
    <View style={{height}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={use} />
      </Appbar.Header>
      {use === 'PropertyDetail' && <PropertyDetail {...meta} />}
      {use === 'DoSchedule' && <DoSchedule {...meta} />}
    </View>
  );
}
