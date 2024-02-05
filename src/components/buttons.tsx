import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface MainButtonProps {
  onPress: () => void;
  title: string;
}

export const MainButton = ({onPress, title}: MainButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#2167ff] rounded-full w-full h-12 items-center justify-center">
      <Text className="text-[16px] text-white font-montserratBold">{title}</Text>
    </TouchableOpacity>
  );
};
