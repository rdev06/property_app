import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import { DatePickerInput, TimePickerModal } from 'react-native-paper-dates';

const today = new Date();
const [H, M] = today.toLocaleTimeString().split(':');

function TimePickerInput({ label, time, setTime }) {
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setTime(hours + ':' + minutes);
      setVisible(false);
    },
    [setVisible]
  );
  const [CH, CM] = time.split(':');
  return (
    <>
      <TextInput
        label={label + ' HH:MM'}
        mode='outlined'
        right={<TextInput.Icon icon='clock' onPress={() => setVisible(true)} />}
        value={time}
        style={{ width: 100, marginHorizontal: 20 }}
      />
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={CH}
        minutes={CM}
      />
    </>
  );
}

export default function DoSchedule(props) {
  // props = {
  //   owner: {
  //     name: 'Roshan Dev'
  //   }
  // };
  const [inputDate, setInputDate] = useState(today);
  const [fromTime, setFromTime] = useState(H + ':' + M);
  const [toTime, setToTime] = useState(fromTime);
  const [name, setName] = useState(props.name || '');
  const [mobile, setMobile] = useState(props.mobile || '');
  const [email, setEmail] = useState(props.email || '');
  const [message, setMessage] = useState();

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => setToTime(fromTime), [fromTime]);

  return (
    <>
      <Text
        variant='headlineMedium'
        style={{ marginBottom: 20, alignSelf: 'center' }}
      >
        Schedule Your Appointment With: {props.owner.name}
      </Text>
      <View style={{ alignSelf: 'center' }}>
        <DatePickerInput
          locale='en'
          label='Appointment'
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode='start'
          style={styles.picker}
          mode='outlined'
          validRange={{ startDate: today }}
        />
        <View style={{ flexDirection: 'row' }}>
          <TimePickerInput label='From' time={fromTime} setTime={setFromTime} />
          <TimePickerInput label='To' time={toTime} setTime={setToTime} />
        </View>
        <View style={styles.textInputs}>
          <TextInput
            placeholder='Your Name'
            label='Name'
            mode='outlined'
            disabled={!!name}
            value={name}
            onChange={(e) => setName(e.value)}
          />
          <TextInput
            placeholder='Your Mobile Number'
            label='Mobile'
            mode='outlined'
            value={mobile}
            style={{ marginVertical: 10 }}
            onChange={(e) => setMobile(e.value)}
          />
          <TextInput
            placeholder='Your Email Id'
            label='Email'
            mode='outlined'
            value={email}
            onChange={(e) => setEmail(e.value)}
          />

          <TextInput
            placeholder='Your Message'
            label='Message'
            mode='outlined'
            value={message}
            style={{ marginVertical: 10, height: 200, paddingTop: 0 }}
            multiline
            onChange={(e) => setMessage(e.value)}
          />
        </View>
        <Button icon="send-clock" mode="contained" onPress={onToggleSnackBar}>Press me</Button>
        <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        onIconPress={onDismissSnackBar}
        style={{backgroundColor: 'green', borderRadius: 50}}
        >
        Your Request Submited
      </Snackbar>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    marginVertical: 5,
    width: 300
  },
  textInputs: {
    marginTop: 10
  }
});
