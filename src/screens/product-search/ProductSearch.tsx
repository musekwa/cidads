import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import {HeaderWithSearchbar} from '../../components/header-with-searchbar';
import {COLORS} from '../../assets/colors';

const ProductSearchScreen = ({route}: any) => {
  const {searchPlaceholder} = route.params;
  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutRight.duration(300)}>
      <HeaderWithSearchbar bgColor={COLORS.main} placeholder={searchPlaceholder} />
      <ScrollView>
        {/* <Places /> */}
        <Text>Product search</Text>
      </ScrollView>
    </Animated.View>
  );
};

export default ProductSearchScreen;
