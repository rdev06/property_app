import { useState } from 'react';
import { Chip as ChipF } from 'react-native-paper';

export default function Chip(props) {
  const [isSelected, setIsSeclected] = useState(props.selected);
  return (
    <ChipF
      // key={props.key}
      style={props.style || {}}
      icon={props.icon || (!isSelected && 'plus')}
      selectedColor={isSelected ? 'green' : 'purple'}
      onPress={() => 
        props.setValue(pre => {
          setIsSeclected(true);
          pre[props.index].selected = true;
          return [...pre]
        })
      }
      onClose={
        isSelected &&
        (() => {
          setIsSeclected(false);
          
          props.setValue(pre => {
            pre[props.index].selected = false;
            return [...pre]
          });
        })
      }
    >
      {props.label}
    </ChipF>
  );
}
