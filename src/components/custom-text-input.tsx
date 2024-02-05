import React, {useRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {COLORS} from '../assets/colors';
import {Icon} from '@rneui/themed';

interface CustomTextInputProps {
  // inputRef
  value: string | undefined;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: string;
  secureTextEntry?: boolean;
  label?: string;
}

export const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  type,
  secureTextEntry,
  label,
}: CustomTextInputProps) => {
  const inputRef = useRef<TextInput | null>(null);

  const clearTextInput = () => {
    onChangeText('');
    inputRef.current?.focus();
  };

  return (
    <View>
      <Text className="text-[14px] text-gray-900 mb-1 font-montserratMedium ">
        {label}
      </Text>
      <TextInput
        ref={inputRef}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        //   type={type ? type : "text"}
        value={value}
        className="border border-gray-400 shadow-md text-black text-[40px]"
        style={{
          fontSize: value ? 18 : 14,
          fontWeight: value ? '600' : 'normal',
          borderRadius: 8,
          paddingHorizontal: 10,
          // width: "100%"
        }}
        placeholderTextColor={'gray'}
      />
      {!!value && (
        <Pressable
          onPress={clearTextInput}
          style={{
            position: 'absolute',
            right: 10,
            top: 38,
            borderRadius: 50,
            backgroundColor: COLORS.lightgrey,
          }}>
          <Icon name="clear" color={COLORS.lightslategrey} size={18} />
        </Pressable>
      )}
    </View>
  );
};
