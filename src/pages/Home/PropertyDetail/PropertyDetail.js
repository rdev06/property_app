import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Divider, useTheme, IconButton } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('window');

export default function PropertyDetail(props) {
    const theme = useTheme();
    const navigation = useNavigation();
  props = {
    _id: 1,
    title: '1 Room in 2 BED APARTMENT',
    type: 'PRIVATE',
    gender: 'M',
    price: '500',
    duration: 'M',
    currency: '$',
    isWishlisted: false,
    address: 'Some good address',
    updatedAt: {
      value: 2,
      unit: 'Days'
    },
    distanceFromRef: {
      value: 2.2,
      unit: 'K.M'
    },
    images: {
      main: 0,
      list: [
        'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
        'https://drive.google.com/uc?export=download&id=1MxH3n7TD5hbah1o3TnL86fbsI8_b8IQB',
        'https://drive.google.com/uc?export=download&id=1MXCPKCSyUIPuhkAx0Hj7jh97WN2CZRW0',
        'https://drive.google.com/uc?export=download&id=1l5Y2eZETdcuGoTTjA9NDqLpypTheR8Fl',
        'https://drive.google.com/uc?export=download&id=1AFEFosCz_eFoXNJngPembKdugtgnPxQB'
      ]
    }
  };
  const pricePerDuration = props.currency + props.price + '/' + props.duration;
  const [isWishlisted, setIsWishlisted] = useState(props.isWishlisted);
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Swiper
          from={props.images.main}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '>',
            prevTitle: '<',
            nextTitleStyle: styles.paginationDirection,
            prevTitleStyle: styles.paginationDirection
          }}
        >
          {props.images.list.map((link, i) => (
            <Image
              key={i}
              style={styles.image}
              source={{ uri: link }}
              defaultSource={require('../../../../assets/loader.gif')}
            />
          ))}
        </Swiper>
      </View>
      <Divider bold style={{backgroundColor: theme.colors.secondary, margin: 2}} />
      <View style={{flex: 1}}>
        <Text variant="headlineLarge" >{props.title}</Text>
        <Text>{props.address}</Text>
        <Text>{props.type}</Text>
          <Text>{props.gender}</Text>
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
            Updated {props.updatedAt.value + ' ' + props.updatedAt.unit + 'Ago'}
          </Text>
          <IconButton
            icon='message'
            size={25}
            iconColor={theme.colors.primary}
            onPress={() => navigation.navigate('Chat')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    // flex: 1,
    // flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'red'
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
  }
});
