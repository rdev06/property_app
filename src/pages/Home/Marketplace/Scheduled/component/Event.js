import { View, StyleSheet } from 'react-native';
import { Button, Divider, IconButton, Text } from 'react-native-paper';

export default function Event({ item, setEvents }) {
    function onAction(accept=true) {
        return () => setEvents(prev => prev.reduce((pre, curr)=>{
            if(curr.id === item.id){
                if(accept) curr.accepted = true;
                else return pre;
            }
            return pre.concat(curr);
        },[]))
    }
  return (
    <View style={styles.container}>
        <View>
      <Text variant='titleSmall'>
        {item.from}-{item.to}
      </Text>
      <Divider style={{ width: '100%' }} />
      <Text style={{fontWeight: 'bold'}} >{item.name}</Text>
        </View>
      <Divider style={styles.divider} />
      <View style={{flex: 1}}>
        <Text variant='titleSmall'>{item.agenda}</Text>
        <Divider style={{ width: '100%' }} />
        {item.contact && <Text style={{fontWeight: 'bold'}} >{item.contact}</Text>}
        <Text >{item.summary}</Text>

        {!item.accepted && (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <IconButton
              icon='check'
              iconColor='green'
              style={{ paddingVertical: 0, marginVertical: 0 }}
              onPress={onAction(true)}
            />
            <IconButton
              icon='close'
              iconColor='red'
              style={{ paddingVertical: 0, marginVertical: 0 }}
              onPress={onAction(false)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    marginLeft: 20,
    marginVertical: 20,
    flexDirection: 'row'
  },
  divider: {
    width: 1,
    height: '100%',
    marginHorizontal: 2
  }
});
