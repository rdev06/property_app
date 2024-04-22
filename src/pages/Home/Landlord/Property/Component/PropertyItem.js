import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { CircularProgress } from 'react-native-circular-progress';

export default function PropertyItem({ item, navigation }) {
  const theme = useTheme();
  return (
    <Card
    onPress={() =>navigation.navigate('LLPropertyDetail', { propertyId: item._id })}
    >
      <Card.Title 
      title={item.name} 
      subtitle={item.location}
      titleVariant='titleMedium'
      subtitleVariant='titleSmall'
      />
      <Card.Content>
        <View style={styles.overview}>
        <Text>Total Units: {item.units}</Text>
        <Text>Total Teenants: {item.teenants}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Total Collection:</Text>
          <CircularProgress
            size={50}
            width={6}
            fill={(item.paid / item.teenants) * 100}
            arcSweepAngle={180}
            rotation={-90}
            backgroundColor='grey'
            tintColor={theme.colors.primary}
          />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});
