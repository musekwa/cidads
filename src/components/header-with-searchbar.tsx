import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {COLORS} from '../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {BackNavigationProps} from '../assets/types/global-types';

interface HeaderWithSearchbarProps {
  bgColor?: string;
  placeholder?: string;
}

export const HeaderWithSearchbar = ({placeholder, bgColor}: HeaderWithSearchbarProps) => {
  const navigation = useNavigation<BackNavigationProps>();

  return (
    <View
      style={{
        backgroundColor: bgColor,
      }}
      className={`flex flex-row h-14 justify-between items-center px-4 pb-2`}>
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
        className="justify-center items-center">
        <FontAwesomeIcon icon={faArrowLeft} size={20} color={'white'} />
      </Pressable>
      <View className="w-5/6 justify-center items-center">
        {!!placeholder && (
          <TextInput
            className="h-12 w-full font-montserratRegular rounded-md bg-slate-100 pl-4 text-lg text-slate-500"
            placeholder={placeholder}
          />
        )}
      </View>
    </View>
  );
};
