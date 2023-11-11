import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slide: {
    backgroundColor: 'rgba(20,20,200,0.3)'
  }
});

const Notification = () => {
  return (
    <View style={styles.container}>
      <Swiper
        from={1}
        minDistanceForAction={0.1}
        controlsProps={{
          dotsTouchable: true,
          prevPos: 'left',
          nextPos: 'right',
          nextTitle: '>',
          prevTitle: '<'
        }}
      >
        <View style={[styles.slideContainer, styles.slide]}>
          <Text>Slide 1</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide]}>
          <Text>Slide 2</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide]}>
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Notification;
