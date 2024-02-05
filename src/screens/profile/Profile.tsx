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
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import Animated, {SlideInDown} from 'react-native-reanimated';
import {COLORS} from '../../assets/colors';
import { TermsAndPolicies } from '../../components/terms-and-policies';
import { NavigationProps } from '../../assets/types/global-types';
import { HeaderWithAuthBrand } from '../../components/header-with-auth-brand';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CustomTextInput } from '../../components/custom-text-input';
import { MainButton } from '../../components/buttons';


const ProfileScreen = () => {
  const inputRef = useRef<TextInput | null>(null);
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;


  const handleTextInput = (text: string)=>{
    setEmailOrPhoneNumber(text);
  }

  const handleUserLogIn = () => {
    navigation.navigate("EmailPasswordRegistration", {
      params: {
        email: emailOrPhoneNumber,
      }
    })
    Keyboard.dismiss();

  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}>
      {/* <StatusBar  backgroundColor={"transparent"} /> */}

      <HeaderWithAuthBrand scrollOffsetY={scrollOffsetY} icon={faClose} />

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
              <CustomTextInput 
                value={emailOrPhoneNumber}
                onChangeText={handleTextInput}
                placeholder={"Número de Telefone ou Endereço Electrónico"}
              />

              <MainButton 
                onPress={handleUserLogIn}
                title='Entrar'
              />
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
        <TermsAndPolicies />
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
