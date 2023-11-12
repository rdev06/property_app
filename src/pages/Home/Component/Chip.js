import { Chip as ChipF } from 'react-native-paper';

export default function Chip(props) {
  return (
    <ChipF
      // key={props.key}
      style={props.style || {}}
      icon={props.icon || (!props.selected && 'plus')}
      selectedColor={props.selected ? 'green' : 'purple'}
      onPress={() => 
        props.setValue(pre => {
          pre[props.index].selected = true;
          return [...pre]
        })
      }
      onClose={
        props.selected &&
        (() => {
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
