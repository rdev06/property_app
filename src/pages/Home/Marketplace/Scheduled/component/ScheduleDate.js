import { StyleSheet, Pressable } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';


export default function ScheduleDate({item, setDATES, setActive}){
    const theme = useTheme();
    return (
        <Pressable
        style={[styles.dateCard, item.active && {backgroundColor: theme.colors.primary}]}
        onPress={() => {
          setDATES(prev => prev.reduce((pre, curr)=>{
            curr.active = false;
            if(curr.fullDate === item.fullDate){
              curr.active = true
            }
            return pre.concat(curr)
          },[]))
          setActive(item.now)
        }}
        >
          <Text style={[styles.text, item.active && {color:'white'}]}>{item.day}</Text>
          <Divider style={{ marginVertical: 5 }} />
          <Text style={[styles.text, item.active && {color:'white'}]}>{item.date}</Text>
        </Pressable>
      )
}



const styles = StyleSheet.create({
    text: {
      textAlign: 'center'
    },
    dateCard: {
      borderWidth: 2,
      borderColor: 'black',
      width: 40,
      height: 50,
      marginHorizontal: 5,
      borderRadius: 7
    }
  });