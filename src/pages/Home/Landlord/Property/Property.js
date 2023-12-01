import { View } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';


const DATA = [
  {
    name: 'Mast Property',
    location: 'Deira, UAE',
    collection: 30,
    units: 10,
    teenants: 8
}
];

export default function Property() {
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
    </View>
  );
}
