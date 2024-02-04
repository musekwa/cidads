import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface SocialButtonProps {
  title: string;
  imageSource: string;
}

const SocialButton = ({title, imageSource}: SocialButtonProps) => {
  return (
    <TouchableOpacity className="flex flex-row border-0.5 rounded-full w-full h-12 items-center justify-center px-4 gap-x-6">
      <Image
        source={require("../../../assets/images/facebook.png")}
        style={{
          width: 30,
          height: 30,
          resizeMode: 'cover',
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
