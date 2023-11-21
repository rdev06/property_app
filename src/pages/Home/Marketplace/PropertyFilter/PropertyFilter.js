import { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Switch, Text, Divider, IconButton } from 'react-native-paper';
import DropDownF from '../../Component/DropdownF';
import Slider from '@react-native-community/slider';
import { FlatGrid } from 'react-native-super-grid';
import Chip from '../../Component/Chip';
import { AmmenityContext } from '../store';



export default function PropertyFilter({ navigation }) {
  const [pet, setPet] = useState(true);
  const [lease, setLease] = useState(1);
  const [withinDistance, setWithinDistance] = useState(1);
  const [gender, setGender] = useState('M');
  const [type, setType] = useState('A');
  const [property, setProperty] = useState('1B');
  const [level, setLevel] = useState('ANY');
  const [bathroom, setBathroom] = useState(1);
  const [wifi, setWifi] = useState('ANY');
  const [heat, setHeat] = useState('ANY');
  const [electricity, setElectricity] = useState('ANY');
  const [parking, setParking] = useState('ANY');
  const [laundary, setLaundary] = useState('ANY');
  const [deposit, setDeposit] = useState('ANY');
  const [ammenity, setAmmenity] = useContext(AmmenityContext);

  return (
    <ScrollView style={styles.container}>
      <DropDownF
        label='Gender:'
        items={[
          { value: 'M', label: 'Male' },
          { value: 'F', label: 'Female' },
          { value: 'M/F', label: 'Mixed' }
        ]}
        value={gender}
        setValue={setGender}
        style={[styles.filterItem, { zIndex: 20 }]}
      />
      <DropDownF
        label='Type:'
        items={[
          { value: 'A', label: 'Any' },
          { value: 'P', label: 'Sharing' },
          { value: 'S', label: 'Private' }
        ]}
        value={type}
        setValue={setType}
        style={[styles.filterItem, { zIndex: 19 }]}
      />

      <DropDownF
        label='Property:'
        items={[
          { value: '1B', label: '1 Bed' },
          { value: '2B', label: '2 Bed' },
          { value: '3B', label: '3 Bed' },
          { value: '4B', label: '4 Bed' }
        ]}
        value={property}
        setValue={setProperty}
        style={[styles.filterItem, { zIndex: 18 }]}
      />

      <DropDownF
        label='G. Level:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'ABOVE', label: 'Above' },
          { value: 'BASEMENT', label: 'Basement' }
        ]}
        value={level}
        setValue={setLevel}
        style={[styles.filterItem, { zIndex: 17 }]}
      />
      <DropDownF
        label='Bathroom:'
        items={[
          { value: '1', label: '≤ 1' },
          { value: '2', label: '≤ 2' },
          { value: '3', label: '≤ 3 ≤' }
        ]}
        value={bathroom}
        setValue={setBathroom}
        style={[styles.filterItem, { zIndex: 16 }]}
      />
      <DropDownF
        label='Wifi:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        value={wifi}
        setValue={setWifi}
        style={[styles.filterItem, { zIndex: 15 }]}
      />
      <DropDownF
        label='Heat:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        value={heat}
        setValue={setHeat}
        style={[styles.filterItem, { zIndex: 14 }]}
      />
      <DropDownF
        label='Electricity:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'INC', label: 'Included' },
          { value: 'POU', label: 'POU' }
        ]}
        value={electricity}
        setValue={setElectricity}
        style={[styles.filterItem, { zIndex: 13 }]}
      />
      <DropDownF
        label='Parking:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'NO', label: 'NO Parking' },
          { value: 'OFF', label: 'OFF Street' },
          { value: 'ON', label: 'ON Street' }
        ]}
        value={parking}
        setValue={setParking}
        style={[styles.filterItem, { zIndex: 12 }]}
      />
      <DropDownF
        label='Laundry:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'IN-B', label: 'IN-B' },
          { value: 'NO-L', label: 'NO-L' }
        ]}
        value={laundary}
        setValue={setLaundary}
        style={[styles.filterItem, { zIndex: 11 }]}
      />
      <DropDownF
        label='Deposit:'
        items={[
          { value: 'ANY', label: 'Any' },
          { value: 'NO', label: 'NO' },
          { value: '1/2', label: '1/2' },
          { value: '3/4', label: '3/4' },
          { value: 'FULL', label: 'Full' }
        ]}
        value={deposit}
        setValue={setDeposit}
        style={[styles.filterItem, { zIndex: 10 }]}
      />

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold', width: 80 }}>
          Pet: {pet ? 'Yes' : 'No'}
        </Text>
        <Switch value={pet} color='purple' onValueChange={setPet} />
      </View>

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold', width: 80 }}>Lease: {lease}</Text>
        <View style={{ width: 100 }}>
          <Slider
            minimumValue={1}
            maximumValue={12}
            step={3}
            value={lease}
            onValueChange={setLease}
            minimumTrackTintColor='grey'
            maximumTrackTintColor='purple'
          />
        </View>
      </View>

      <View style={styles.filterItem}>
        <Text style={{ fontWeight: 'bold' }}>
          Within Distance(in Km): {withinDistance}
        </Text>
        <View style={{ width: 100 }}>
          <Slider
            minimumValue={1}
            maximumValue={35}
            step={5}
            value={withinDistance}
            onValueChange={setWithinDistance}
            minimumTrackTintColor='grey'
            maximumTrackTintColor='purple'
          />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Ammeneties:
        </Text>
        <FlatGrid
          itemDimension={150}
          style={{alignSelf: 'center'}}
          data={ammenity}
          renderItem={({ item, index }) => <Chip {...item} index={index} setValue={setAmmenity} />}
        />
      </View>

      <DropDownF
        label='Sort By:'
        items={[
          { value: 'date', label: 'Date' },
          { value: 'price', label: 'Price' }
        ]}
        selected='date'
        style={[styles.filterItem, { zIndex: 10 }]}
      />

      <Divider />

      <View style={styles.filterItem}>
        <IconButton
          icon='undo-variant'
          iconColor='red'
          animated={true}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon='check'
          iconColor='green'
          size={40}
          onPress={() => navigation.navigate('PropertyList')}
        />
      </View>

      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
    marginVertical: 10
  }
});
