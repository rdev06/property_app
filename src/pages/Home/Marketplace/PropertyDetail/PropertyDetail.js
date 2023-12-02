import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import Data from '../Data.json';
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Text, Divider, useTheme, IconButton, Button } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import { HomeContext } from '../../home.store';

const { width, height } = Dimensions.get('window');

export default function PropertyDetail({route}) {
  const theme = useTheme();
  const navigation = useNavigation();
  const item = Data.find(e => e._id === route.params._id || 1)
  const pricePerDuration = item.currency + item.price + '/' + item.duration;
  const [isWishlisted, setIsWishlisted] = useState(item.isWishlisted);
  const [rootHeaderShown, setRootHeaderShown] = useContext(HomeContext);

  useFocusEffect(() => setRootHeaderShown(false));
  return (
    <View style={styles.scrollContainer}>
      <View style={styles.container}>
        <Swiper
          from={item.images.main}
          minDistanceForAction={0.1}
          controlsitem={{
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '>',
            prevTitle: '<',
            nextTitleStyle: styles.paginationDirection,
            prevTitleStyle: styles.paginationDirection
          }}
        >
          {item.images.list.map((link, i) => (
            <Image
              key={i}
              style={styles.image}
              source={{ uri: link }}
              defaultSource={require('../../../../../assets/loader.gif')}
            />
          ))}
        </Swiper>
      </View>
      <Divider bold style={styles.divider(theme)} />
      <ScrollView style={styles.container}>
        <Text variant='headlineLarge'>{item.title}</Text>
        <Text>{item.address}</Text>
        <Text>{item.type}</Text>
        <Text>{item.gender}</Text>
        <Text>{pricePerDuration}</Text>
        <IconButton
          icon={isWishlisted ? 'heart' : 'heart-outline'}
          iconColor={theme.colors.primary}
          size={25}
          onPress={() => setIsWishlisted((pre) => !pre)}
        />
        <View style={styles.overview}>
          <Text>2.2 KM</Text>
        </View>
        <View style={styles.overview}>
          <Text style={{ fontWeight: 'bold' }}>
            Updated {item.updatedAt.value + ' ' + item.updatedAt.unit + 'Ago'}
          </Text>
          <IconButton
            icon='message'
            size={25}
            iconColor={theme.colors.primary}
            onPress={() => navigation.navigate('Chat')}
          />
        </View>
        <Button
          icon='send-clock'
          iconColor={theme.colors.primary}
          onPress={() => navigation.navigate('DoSchedule', {_id: item._id})}
          >Visit Schedule</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: width >= 768 ? 'row' : 'column'
  },
  container: {
    flex: 1,
    width: width >= 768 ? 800 : width,
    height: height / 1.5,
    flexBasis: height / 1.5
  },
  image: { aspectRatio: 1, marginLeft: 5 },
  paginationDirection: {
    display: width >= 768 ? 'flex' : 'none',
    borderRadius: 100,
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divider: (theme) => ({
    backgroundColor: theme.colors.secondary,
    ...(width >= 768
      ? { width: 1, height: '100%', marginHorizontal: 5 }
      : {
          marginVertical: 5
        })
  })
});
