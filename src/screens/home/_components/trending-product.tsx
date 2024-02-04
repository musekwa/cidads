import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {SlideInUp} from 'react-native-reanimated';
import {BackNavigationProps} from '../../../assets/types/global-types';
import {SharedElementTransition} from '../../../utils/SharedElementTransition';

type TrendingItem = {
  id: number;
  name: string;
  salaryRange: string;
  category: string;
  description: string;
  address: string;
};

interface TrendingProps {
  trendingItem: TrendingItem;
  isGridLayout: boolean;
}

export const Trending = ({trendingItem, isGridLayout}: TrendingProps) => {
  const navigation = useNavigation<BackNavigationProps>();
  const {width, height} = useWindowDimensions();

  const RPH = (percentage: number) => {
    return (percentage / 100) * height;
  };

  const RPW = (percentage: number) => {
    return (percentage / 100) * width;
  };

  const navigateTopProductDetails = () => {
    navigation.navigate({
      name: 'ProductDetails',
      params: {
        product: trendingItem,
      },
    });
  };
  
  if (isGridLayout) {
    return (
      <Animated.View
        entering={SlideInUp.duration(800)}
        style={{
          width: RPW(45),
          height: RPH(30),
          margin: 5,
        }}
        className="border border-slate-300 shadow-xs shadow-sky-200 rounded-md">
        <TouchableOpacity onPress={navigateTopProductDetails}>
          <View
            style={{
              height: RPH(15),
            }}>
            <Animated.Image
              style={{
                width: '100%',
                height: 120,
                resizeMode: 'cover',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
              source={require('../../../assets/images/product2.jpg')}
              sharedTransitionTag={`image-${trendingItem.id}`}
              sharedTransitionStyle={SharedElementTransition}
            />
          </View>
          <View
            style={{
              height: RPH(15),
            }}
            className="flex justify-between p-1">
            <View>
              <Text className="text-sm text-black font-montserratBold">
                {trendingItem.salaryRange} MZN
              </Text>
              <Text
                className="text-[14px] text-[#2167ff] font-montserratBold"
                ellipsizeMode="tail"
                numberOfLines={2}>
                {trendingItem.name}
              </Text>
              <Text
                className="text-[13px] text-slate-600 font-ralewayRegular"
                ellipsizeMode="tail"
                numberOfLines={2}>
                {trendingItem.description}
              </Text>
            </View>
            <View className="">
              <Text
                className="text-xs text-slate-500 font-ralewayRegular"
                ellipsizeMode="tail"
                numberOfLines={1}>
                {trendingItem.address}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      entering={SlideInUp.duration(800)}
      className="self-center border border-slate-300 shadow-xs shadow-sky-200 rounded-md"
      style={{
        width: RPW(94),
        height: RPH(18),
        marginVertical: 5,
      }}>
      <TouchableOpacity
        onPress={navigateTopProductDetails}
        className="flex flex-row">
        <View className="pr-2">
          <Animated.Image
            style={{
              width: RPW(30),
              height: RPH(18),
              resizeMode: 'cover',
              aspectRatio: 7 / 8,
              borderRadius: 5,
            }}
            source={require('../../../assets/images/product1.jpg')}
            sharedTransitionTag={`image-${trendingItem.id}`}
            sharedTransitionStyle={SharedElementTransition}
          />
        </View>
        <View className="flex justify-between p-0.5">
          <View
            style={{
              width: RPW(60),
            }}>
            <Text className="text-sm text-black font-ralewayBold">
              {trendingItem.salaryRange} MZN
            </Text>
            <Text
              className="text-[14px] text-[#2167ff] font-montserratBold"
              ellipsizeMode="tail"
              numberOfLines={2}>
              {trendingItem.name}
            </Text>
            <Text
              className="text-[13px] text-slate-600 font-ralewayRegular"
              ellipsizeMode="tail"
              numberOfLines={3}>
              {trendingItem.description}
            </Text>
          </View>
          <View className="">
            <Text
              className="text-xs text-slate-500 font-ralewayRegular"
              ellipsizeMode="tail"
              numberOfLines={1}>
              {trendingItem.address}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
