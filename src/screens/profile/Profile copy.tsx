import {
  View,
  Text,
  StatusBar,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Keyboard,
  Animated as RNAnimated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import Animated, {SlideInDown} from 'react-native-reanimated';
import {COLORS} from '../../assets/colors';
import {AnimatedScrollView} from '@kanelloc/react-native-animated-header-scroll-view';

type NavigationProps = {
  [x: string]: any;
  name: string;
  merge?: boolean;
  params?: {};
};

const Header_Max_Height = 150;
const Header_Min_Height = 30;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const HeaderNavBar = ({}) => {
  const navigation = useNavigation();
  return (
    <RNAnimated.View
      style={{
        minHeight: 90,
        backgroundColor: '#2167ff',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        width: '100%',
        paddingBottom: 10,
      }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          // height: 55,
          marginTop: StatusBar.currentHeight,
          marginHorizontal: 10,

          justifyContent: 'center',
          // alignItems: "center",
        }}>
        <FontAwesomeIcon icon={faClose} size={25} color="white" />
      </Pressable>
      {
        <View className="items-center justify-center">
          <Text className="text-2xl text-white font-montserratBold">
            CidAds
          </Text>
          <View className="flex flex-row items-center justify-center w-1/2 gap-2">
            <Icon name="lock-outline" color="white" size={15} />
            <Text className="text-[11px] text-white font-ralewayLight ">
              Os seus dados serão protegidos.
            </Text>
          </View>
        </View>
      }
    </RNAnimated.View>
  );
};

const TopNavBar = ({}) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: '#2167ff',
        width: '100%',
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",

      }}>
      <Text
        style={{
          color: "white",
          fontSize: 16,
        }}
      >Você</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const inputRef = useRef<TextInput | null>(null);
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const clearInputText = () => {
    setEmailOrPhoneNumber('');
    inputRef.current?.focus();
  };

  const handleUserLogIn = () => {
    Keyboard.dismiss();
  };

  return (
    // <AnimatedScrollView
    //   HeaderNavbarComponent={<HeaderNavBar />}
    //   TopNavBarComponent={<TopNavBar />}
    //   // headerImage={require('../../assets/images/google.png')}
    //   topBarHeight={55}
    //   headerMaxHeight={120}
    //     showsVerticalScrollIndicator={false}
    //     keyboardShouldPersistTaps="always"
    //     entering={SlideInDown.duration(300)}
    //     contentContainerStyle={{
    //       // flex: 1,
    //       justifyContent: 'center',

    //       // minHeight: '100%',
    //       margin: 15,
    //     }}>
    //   <View
    //     style={{
    //       alignItems: 'center',
    //     }}>
    //     <View
    //       style={{
    //         width: '100%',
    //         gap: 30,
    //       }}>
    //       <TextInput
    //         ref={inputRef}
    //         onChangeText={text => setEmailOrPhoneNumber(text)}
    //         value={emailOrPhoneNumber}
    //         className="border border-gray-400 shadow-md text-black text-[40px]"
    //         style={{
    //           fontSize: emailOrPhoneNumber ? 18 : 14,
    //           fontWeight: emailOrPhoneNumber ? '600' : 'normal',
    //           borderRadius: 8,
    //           paddingHorizontal: 10,
    //           // width: "100%"
    //         }}
    //         placeholderTextColor={'gray'}
    //         placeholder="Número de Telefone ou Endereço Electrónico"
    //       />
    //       {!!emailOrPhoneNumber && (
    //         <Pressable
    //           onPress={clearInputText}
    //           style={{
    //             position: 'absolute',
    //             right: 10,
    //             top: 15,
    //             borderRadius: 50,
    //             backgroundColor: COLORS.lightgrey,
    //           }}>
    //           <Icon name="clear" color={COLORS.lightslategrey} size={18} />
    //         </Pressable>
    //       )}
    //       <TouchableOpacity
    //         onPress={handleUserLogIn}
    //         className="bg-[#2167ff] rounded-full w-full h-12 items-center justify-center">
    //         <Text className="text-[16px] text-white font-montserratBold">
    //           Entrar
    //         </Text>
    //       </TouchableOpacity>
    //     </View>

    //     <Pressable className="mt-4">
    //       <Text className="text-[12px] font-ralewayRegular text-gray-500">
    //         Esqueceu as Credenciais?
    //       </Text>
    //     </Pressable>

    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         gap: 10,
    //         paddingVertical: 15,
    //       }}>
    //       <View className="w-[40%] bg-gray-300 h-[1px]" />
    //       <Text className="text-[16px] font-montserratBold text-gray-500">
    //         OU
    //       </Text>
    //       <View className="w-[40%] bg-gray-300 h-[1px]" />
    //     </View>

    //     <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
    //       <Image
    //         source={require('../../assets/images/google.png')}
    //         style={{
    //           width: 30,
    //           height: 30,
    //           resizeMode: 'cover',
    //         }}
    //       />
    //       <Text className="ml-4">Continuar com Google</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
    //       <Image
    //         source={require('../../assets/images/facebook.png')}
    //         style={{
    //           width: 30,
    //           height: 30,
    //           resizeMode: 'cover',
    //         }}
    //       />
    //       <Text className="ml-4">Continuar com Facebook</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
    //       <Image
    //         source={require('../../assets/images/twitterX.png')}
    //         style={{
    //           width: 30,
    //           height: 30,
    //           resizeMode: 'cover',
    //         }}
    //       />
    //       <Text className="ml-4">Continuar com X</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <Text className="text-center text-[12px] font-ralewayRegular text-gray-900">
    //       Ao continuar, o utilizador concorda com os nossos{' '}
    //       <Text
    //         onPress={() => navigation.navigate('TermsOfUse')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Termos de Utilização
    //       </Text>
    //       <Text className="text-center text-[12px]"> e </Text>
    //       <Text
    //         onPress={() => navigation.navigate('PolicyAndPrivacy')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Política de Privacidade
    //       </Text>
    //     </Text>
    //   </View>

    //   <View>
    //     <Text className="text-center text-[12px] font-ralewayRegular text-gray-900">
    //       Ao continuar, o utilizador concorda com os nossos{' '}
    //       <Text
    //         onPress={() => navigation.navigate('TermsOfUse')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Termos de Utilização
    //       </Text>
    //       <Text className="text-center text-[12px]"> e </Text>
    //       <Text
    //         onPress={() => navigation.navigate('PolicyAndPrivacy')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Política de Privacidade
    //       </Text>
    //     </Text>
    //   </View>
    //   <View>
    //     <Text className="text-center text-[12px] font-ralewayRegular text-gray-900">
    //       Ao continuar, o utilizador concorda com os nossos{' '}
    //       <Text
    //         onPress={() => navigation.navigate('TermsOfUse')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Termos de Utilização
    //       </Text>
    //       <Text className="text-center text-[12px]"> e </Text>
    //       <Text
    //         onPress={() => navigation.navigate('PolicyAndPrivacy')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Política de Privacidade
    //       </Text>
    //     </Text>
    //   </View>
    //   <View>
    //     <Text className="text-center text-[12px] font-ralewayRegular text-gray-900">
    //       Ao continuar, o utilizador concorda com os nossos{' '}
    //       <Text
    //         onPress={() => navigation.navigate('TermsOfUse')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Termos de Utilização
    //       </Text>
    //       <Text className="text-center text-[12px]"> e </Text>
    //       <Text
    //         onPress={() => navigation.navigate('PolicyAndPrivacy')}
    //         className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
    //         Política de Privacidade
    //       </Text>
    //     </Text>
    //   </View>
     
    </AnimatedScrollView>
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <RNAnimated.View
        style={{
          height: animatedHeaderheight,
          backgroundColor: '#2167ff',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            // height: 55,
            marginTop: StatusBar.currentHeight,
            marginHorizontal: 10,

            justifyContent: 'center',
            // alignItems: "center",
          }}>
          <FontAwesomeIcon icon={faClose} size={25} color="white" />
        </Pressable>
        {
          <View className="items-center justify-center">
            <Text className="text-2xl text-white font-montserratBold">
              CidAds
            </Text>
            <View className="flex flex-row items-center justify-center w-1/2 gap-2">
              <Icon name="lock-outline" color="white" size={15} />
              <Text className="text-[11px] text-white font-ralewayLight ">
                Os seus dados serão protegidos.
              </Text>
            </View>
          </View>
        }
      </RNAnimated.View>

      <Animated.ScrollView
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      bounces={false}
        scrollEventThrottle={16}
        onScroll={RNAnimated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        entering={SlideInDown.duration(300)}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          // padding: 15,
          minHeight: '100%',
          margin: 15,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              gap: 30,
            }}>
            <TextInput
              ref={inputRef}
              onChangeText={text => setEmailOrPhoneNumber(text)}
              value={emailOrPhoneNumber}
              className="border border-gray-400 shadow-md text-black text-[40px]"
              style={{
                fontSize: emailOrPhoneNumber ? 18 : 14,
                fontWeight: emailOrPhoneNumber ? '600' : 'normal',
                borderRadius: 8,
                paddingHorizontal: 10,
                // width: "100%"
              }}
              placeholderTextColor={'gray'}
              placeholder="Número de Telefone ou Endereço Electrónico"
            />
            {!!emailOrPhoneNumber && (
              <Pressable
                onPress={clearInputText}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 15,
                  borderRadius: 50,
                  backgroundColor: COLORS.lightgrey,
                }}>
                <Icon name="clear" color={COLORS.lightslategrey} size={18} />
              </Pressable>
            )}
            <TouchableOpacity
              onPress={handleUserLogIn}
              className="bg-[#2167ff] rounded-full w-full h-12 items-center justify-center">
              <Text className="text-[16px] text-white font-montserratBold">
                Entrar
              </Text>
            </TouchableOpacity>
          </View>

          <Pressable className="mt-4">
            <Text className="text-[12px] font-ralewayRegular text-gray-500">
              Esqueceu as Credenciais?
            </Text>
          </Pressable>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 15,
            }}>
            <View className="w-[40%] bg-gray-300 h-[1px]" />
            <Text className="text-[16px] font-montserratBold text-gray-500">
              OU
            </Text>
            <View className="w-[40%] bg-gray-300 h-[1px]" />
          </View>

          <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
            <Image
              source={require('../../assets/images/google.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'cover',
              }}
            />
            <Text className="ml-4">Continuar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
            <Image
              source={require('../../assets/images/facebook.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'cover',
              }}
            />
            <Text className="ml-4">Continuar com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row justify-start pl-12 border-0.5 rounded-full w-full h-12 items-center mb-4">
            <Image
              source={require('../../assets/images/twitterX.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'cover',
              }}
            />
            <Text className="ml-4">Continuar com X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-center text-[12px] font-ralewayRegular text-gray-900">
            Ao continuar, o utilizador concorda com os nossos{' '}
            <Text
              onPress={() => navigation.navigate('TermsOfUse')}
              className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
              Termos de Utilização
            </Text>
            <Text className="text-center text-[12px]"> e </Text>
            <Text
              onPress={() => navigation.navigate('PolicyAndPrivacy')}
              className="text-center text-[12px] text-[#2167ff] font-ralewayBold">
              Política de Privacidade
            </Text>
          </Text>
        </View>
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
