import {Text, Pressable, StatusBar, View} from 'react-native';
import React from 'react';
import Animated, {FadeInLeft, FadeOutLeft} from 'react-native-reanimated';
import {COLORS} from '../../assets/colors';
import {SharedElementTransition} from '../../utils/SharedElementTransition';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {Box, HStack} from '@gluestack-ui/themed';
import {Chip, Icon} from '@rneui/themed';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import ImageSlider from './ImageSwiperTest';

const statusBarHeight = StatusBar.currentHeight;

const ProductDetailsScreen = ({navigation, route}) => {
  const {styles} = useStyles(stylesheet);
  const {product} = route.params;

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <HStack style={styles.header}>
        <Pressable
          onPress={() =>
            navigation.navigate({
              name: 'Home',
              merge: true,
              params: {
                text: 'yeas',
              },
            })
          }
          className=" ">
          <FontAwesomeIcon icon={faArrowLeft} size={20} color={'white'} />
        </Pressable>
        <Pressable onPress={() => {}} className=" ">
          <FontAwesomeIcon icon={faEllipsisV} size={20} color={'white'} />
        </Pressable>
      </HStack>
      <Animated.ScrollView exiting={FadeOutLeft.duration(300)}
        style={{
          // paddingHorizontal: 5,
        }}
      >
        <View style={{
          // width: "100%",
        }}>
          {/* <Animated.Image
            sharedTransitionTag={`image-${product.id}`}
            sharedTransitionStyle={SharedElementTransition}
            source={require('../../assets/images/product2.jpg')}
            style={{
              width: '100%',
              height: 400,
            }}
          /> */}
          <ImageSlider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
              bottom: 35,
              right: 10,
            }}
          >
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text>fhfghdg gdjgdj</Text>
            </View>
            <View>

            <Pressable
              style={{
                borderRadius: 300,
                borderWidth: 1,
                borderColor: '#ffffff',
                paddingHorizontal: 10,
                paddingVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#444444',
                opacity: 0.7,
              }}>
              <Text
                style={{
                  color: '#ffffff',
                }}>
                1/5
              </Text>
            </Pressable>
            </View>
          </View>
        </View>

        <Box>
          <HStack p={'$2'} gap={6} alignItems="center">
            <Icon name="location-pin" size={25} color={COLORS.slategrey} />
            <Animated.Text
              entering={FadeInLeft.duration(600)}
              className="text-slate-900 font-montserratMedium">
              Maputo, Mavalane A, 03/04/2024
            </Animated.Text>
          </HStack>
        </Box>
      </Animated.ScrollView>
    </>
  );
};

const stylesheet = createStyleSheet(theme => ({
  header: {
    position: 'absolute',
    top: statusBarHeight,
    left: 10,
    right: 10,
    zIndex: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default ProductDetailsScreen;
