import { Chip as ChipF } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export default function Chip(props) {
  const theme = useTheme()
  return (
    <ChipF
      // key={props.key}
      style={props.style || {}}
      icon={props.icon || (!props.selected && 'plus')}
      selectedColor={props.selected ? 'green' : theme.colors.primary}
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
