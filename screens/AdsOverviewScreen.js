import React from 'react';
import {StyleSheet, View, Text,  } from 'react-native';
// import {requireNativeComponent} from 'react-native-web';


import { Video } from 'expo-av';

const AdsOverviewScreen = props => {


  return (
    <View>
      <Text>Ads App</Text>
      <Video
    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={{ width: 300, height: 300 }}
/>

    </View>
   
  );
};
// const styles = StyleSheet.create({
//   container:{ flex: 1, justifyContent: "center"},
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
export default AdsOverviewScreen;
