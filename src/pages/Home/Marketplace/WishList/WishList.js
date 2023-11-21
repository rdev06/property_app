import { FlatGrid } from 'react-native-super-grid';
import DATA from '../Data.json'
import PropertyItem from '../Component/PropertyItem';

export default function WishList({navigation}){
    return <FlatGrid
    itemDimension={400}
    data={DATA.filter(e => e.isWishlisted)}
    renderItem={item => <PropertyItem {...item} navigation={navigation} />}
  />
}