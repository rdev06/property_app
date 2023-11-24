import { View, FlatList } from 'react-native';
import { useState } from 'react';
import { Divider, Text, useTheme } from 'react-native-paper';
import { generateDates, oneDay, today } from './utils';
import ScheduleDate from './component/ScheduleDate';
import Event from './component/Event';


export default function Scheduled() {
  const [DATES, setDATES] = useState(generateDates((today - (3 * oneDay))));
  const [active, setActive] = useState(today);
  const [events, setEvents] = useState(require('./data.json'))
  const theme = useTheme();
  return (
    <View>
      <Text variant='titleMedium' style={{textAlign: 'center'}}>
        {new Date(active*1000).toDateString('en-gb')}
      </Text>
      <FlatList 
      data={DATES} 
      renderItem={({ item }) => <ScheduleDate theme={theme} item={item} setDATES={setDATES} setActive={setActive}/>}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onEndReached={() => {
        setDATES(prev => prev.concat(generateDates(prev.at(-1).now).slice(1)))
      }}
      // onStartReached={() => {
      //   console.log('swipe')
      //   // setDATES(prev => generateDates(DATES[0].now, -7).slice(1).concat(prev))
      // }}
      />
      <Divider style={{marginVertical: 5, marginBottom: 20}}/>
      <FlatList
      data={events}
      renderItem={({item})=> <Event item={item} setEvents={setEvents}/>}
       />
    </View>
  );
}