import {View, Text, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowLeft,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View className="bg-[#2167ff] pb-4 rounded-b-2xl">
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 55,
            marginTop: StatusBar.currentHeight,
            marginHorizontal: 10,

            justifyContent: 'center',
            // alignItems: "center",
          }}>
          <FontAwesomeIcon icon={faClose} size={20} color="white" />
        </Pressable>
        <View className="items-center justify-center">
          <Text className="text-2xl text-white font-montserratBold">CidAds</Text>
          <View
            className='flex flex-row items-center justify-center w-1/2 gap-2'
          >
            <Icon name="lock-outline" color="white" size={15} />
            <Text
              className='text-[11px] text-white font-ralewayLight '
            >
              Os seus dados serão protegidos
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}></View>
    </>
  );
};

export default ProfileScreen;
