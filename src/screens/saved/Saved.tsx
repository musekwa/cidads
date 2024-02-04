import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';
import { Button } from 'tamagui';
import { Circle, Svg } from 'react-native-svg';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SIZE = 120;

const SavedScreen = () => {

  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = (event)=>{
    width.value = event.nativeEvent.layout.width;
  };

  const tap = Gesture.Tap()
    .onBegin(()=>{
      pressed.value = true;
    })
    .onFinalize(()=>{
      pressed.value = false;
    });


    const pan = Gesture.Pan()
    .onBegin(()=>{
      pressed.value = true;
    })
    .onChange((event)=>{
      offset.value = event.changeX;
    })
    .onFinalize((event)=>{
      offset.value = withDecay(
        {
          velocity: event.velocityX,
          rubberBandEffect: true,
          clamp: [ -(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
        }
      );
      pressed.value = false;
    });

    const animatedStyle = useAnimatedStyle(()=>({
      transform: [
        // { scale: withTiming(pressed.value ? 1.5 : 1)},
        { translateX: offset.value }
      ],
      // backgroundColor: pressed.value ? "#ffe04b" : "#b58df1",
    }));




  return (
    <View style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center", }}>
      <View onLayout={onLayout} style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[{alignItems: 'center',
    justifyContent: 'center', backgroundColor: '#b58df1', height: SIZE, width: SIZE, borderRadius: 20, cursor: "grab"}, animatedStyle]} />
      </GestureDetector>
      </View>
    </View>
  );
};

export default SavedScreen;
