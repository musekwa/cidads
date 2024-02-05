import React, { useRef } from "react";
import { IconDefinition, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Animated as RNAnimated, Pressable,  } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../assets/types/global-types";

const Header_Max_Height = 120;
const Header_Min_Height = 60;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

interface HeaderWithAuthBrandProps {
    scrollOffsetY: RNAnimated.Value,
    icon: IconDefinition,
}

export const HeaderWithAuthBrand = ({scrollOffsetY, icon }: HeaderWithAuthBrandProps)=>{

    const navigation = useNavigation<NavigationProps>();

    const animatedHeaderheight = scrollOffsetY.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });
  
    const animatedTitleFontSize = scrollOffsetY.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [20, 12],
      extrapolate: 'clamp',
    });
  
    const animatedDescriptionFontSize = scrollOffsetY.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [11, 8],
      extrapolate: 'clamp',
    });
  

    return (
        <RNAnimated.View
        style={{
          height: animatedHeaderheight,
          backgroundColor: '#2167ff',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          paddingBottom: 10,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            // height: 55,
            // marginTop: StatusBar.currentHeight,
            marginHorizontal: 10,

            justifyContent: 'center',
            // alignItems: "center",
          }}>
          <FontAwesomeIcon icon={icon} size={25} color="white" />
        </Pressable>

        <RNAnimated.View className="items-center justify-center pb-4">
          <RNAnimated.Text
            style={{
              fontSize: animatedTitleFontSize,
            }}
            className="text-white font-montserratBold">
            CidAds
          </RNAnimated.Text>
          <RNAnimated.View className="flex flex-row items-center justify-center w-1/2 gap-2">
            <Icon name="lock-outline" color="white" size={15} />
            <RNAnimated.Text
              style={{
                fontSize: animatedDescriptionFontSize,
              }}
              className=" text-white font-ralewayLight ">
              Os seus dados serão protegidos.
            </RNAnimated.Text>
          </RNAnimated.View>
        </RNAnimated.View>
      </RNAnimated.View>
    )
}