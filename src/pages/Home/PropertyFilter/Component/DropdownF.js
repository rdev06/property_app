import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text } from 'react-native';
import { useState } from 'react';

export default function DropDownF({ label, items, value, setValue, style }) {
  const [open, setOpen] = useState(false);
  
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', width: 80 }}>{label}</Text>
      <View style={{ width: 100 }} >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          showTickIcon={true}
          dropDownDirection="BOTTOM"
        
        />
      </View>
    </View>
  );
}
