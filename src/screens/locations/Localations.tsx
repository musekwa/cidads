import {ScrollView} from 'react-native';
import React from 'react';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import {CustomHeader} from '../../components/header';
import {COLORS} from '../../assets/colors';
import {Locations} from './_components/locations';

const LocationsScreen = ({}) => {
  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutRight.duration(300)}>
      <CustomHeader
        bgColor={COLORS.main}
        placeholder="Procura localização..."
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <Locations />
      </ScrollView>
    </Animated.View>
  );
};

export default LocationsScreen;
