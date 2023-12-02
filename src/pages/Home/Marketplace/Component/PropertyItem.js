import { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, IconButton, useTheme } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('window');

export default function PropertyItem({ item, navigation }) {
  const pricePerDuration = item.currency + item.price + '/' + item.duration;
  const [isWishlisted, setIsWishlisted] = useState(item.isWishlisted);
  const theme = useTheme();

  function removeFromWHishList() {
    setIsWishlisted((pre) => !pre);
  }

  return (
    <Card
      onPress={() =>
        navigation.navigate('PropertDetail', { _id: item._id })
      }
    >
      <Card.Title title={item.title} />
      <Card.Content>
        <View style={[styles.overview, { alignItems: 'center' }]}>
          <Text>{item.type}</Text>
          <Text>{item.gender}</Text>
          <Text>{pricePerDuration}</Text>
          <IconButton
            icon={isWishlisted ? 'heart' : 'heart-outline'}
            iconColor={theme.colors.primary}
            size={25}
            onPress={removeFromWHishList}
          />
        </View>
        <View style={{ flexBasis: 400 }}>
          <Swiper
            from={item.images.main}
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

        <View style={styles.overview}>
          <Text>{item.address}</Text>
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
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: height / 2
  },
  paginationDirection: {
    display: width >= 768 ? 'flex' : 'none',
    borderRadius: 100,
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  }
});
