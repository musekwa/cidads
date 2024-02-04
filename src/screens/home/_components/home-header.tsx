import React from "react";

import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../assets/colors";
import { NavigationProps } from "./category";

const Header_Max_Height = 240;
const Header_Min_Height = 60;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

export const  HomeScreenHeader = ({value, searchLocationKey, setSearchLocationKey}: any) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProps>();

    const animatedHeaderheight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });

    const animatedHeight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [40, -10],
      extrapolate: 'clamp',
    });

    const animatedFontSize = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [26, -10],
      extrapolate: 'clamp',
    });
    const animatedColor = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: ['#ffffff', COLORS.main],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: COLORS.main,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: animatedHeaderheight,
          //  transform: [{ translateY }]
        }}
        className={'h-40  justify-end items-center'}>
        <View className="justify-end">
          <Animated.Text
            style={{
              fontSize: animatedFontSize,
              height: animatedHeight,
              color: animatedColor,
              fontFamily: 'Montserrat-Medium',
            }}
            className="text-white ">
            Tudo, no CidAds!
          </Animated.Text>
        </View>
        <View className="flex flex-row justify-around pt-8 pb-2 gap-5 items-end ">
          <TouchableOpacity
            className="flex flex-row overflow-hidden rounded-md bg-white h-10 w-2/5  items-center"
            onPress={() => {
              navigation.navigate({
                name: 'Locations',
              });
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="ml-2 text-[14px] text-slate-500"
              style={{
                fontFamily: 'Montserrat-Bold',
              }}>
              {searchLocationKey ?? 'Todo Moçambique'}
            </Text>
            <View className="absolute right-2">
              <FontAwesomeIcon icon={faChevronDown} size={20} color={'grey'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row rounded-md bg-white h-10 w-2/5 items-center"
            onPress={() => {
              navigation.navigate({
                name: 'ProductSearch',
                params: {
                  searchPlaceholder: "Procura localização..."
                }
              });
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="ml-2 text-[14px] text-slate-500"
              style={{
                fontFamily: 'Montserrat-Bold',
              }}>
              A procura de...
            </Text>
            <View className="absolute right-2">
              <FontAwesomeIcon icon={faSearch} size={20} color={'grey'} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };