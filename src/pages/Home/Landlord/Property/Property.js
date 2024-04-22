import { View } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import DATA from './DATA.json';
import PropertyItem from './Component/PropertyItem';

// collection: out of 8 teenants 6 have paid as per any type of plan(Monthly, Quaterly, Yearly, Daily)

export default function Property({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View>
      <Searchbar
        placeholder='Search By Property name'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ marginTop: 5, height: 30, width: '80%' }}
        inputStyle={{ alignSelf: 'center' }}
      />
      {/* Add the rest of your content below */}
      <FlatGrid
        itemDimension={400}
        data={DATA.property}
        renderItem={(item) => <PropertyItem {...item} navigation={navigation} />}
      />
    </View>
  );
}
