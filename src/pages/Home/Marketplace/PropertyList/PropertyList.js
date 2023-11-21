import { useContext } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import Data from '../Data.json';
import PropertyItem from '../Component/PropertyItem';
import { View, ScrollView, StyleSheet } from 'react-native';
import Chip from '../../Component/Chip';
import { IconButton } from 'react-native-paper';
import { AmmenityContext } from '../store';

export default function PropertyList({ navigation }) {

  const [ammenity, setAmmenity] = useContext(AmmenityContext);

  return (
    <>
      <View style={styles.filterChips}>
        <IconButton
          icon='filter'
          iconColor='purple'
          size={20}
          onPress={() => navigation.navigate('PropertyFilter')}
        />
        <ScrollView
        horizontal={true}
        >
        {ammenity.map((e, i) => (e.selected && <Chip
            style={styles.chip}
            key={i}
            label={e.label}
            icon={e.icon}
            index={i}
            selected={e.selected}
            setValue={setAmmenity}
          />))}
        </ScrollView>
      </View>
      <FlatGrid
        itemDimension={400}
        data={Data}
        renderItem={(item) => <PropertyItem {...item} navigation={navigation} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  filterChips: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  chip : {
    height: 30,
    alignSelf: 'center',
    marginHorizontal: 5
  }
});
