import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Animated as RNAnimated,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TermsAndPolicies} from '../../components/terms-and-policies';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../assets/types/global-types';
import {faArrowLeft, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Animated, {SlideInDown, SlideInRight} from 'react-native-reanimated';
import {HeaderWithAuthBrand} from '../../components/header-with-auth-brand';
import {supabase} from '../../lib/supabase';
import {Button} from '@rneui/base';

import {CustomTextInput} from '../../components/custom-text-input';
import {COLORS} from '../../assets/colors';
import {MainButton} from '../../components/buttons';

const EmailPasswordRegistration = ({route}: any) => {
  const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;
  const navigation = useNavigation<NavigationProps>();
  const email = route.params.params?.email;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserEmail = (text: string) => {
    setUserEmail(text);
  };

  const handleUserPassword = (text: string) => {
    setUserPassword(text);
  };

  const signInWithEmail = async () => {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      Alert.alert(error.message);
    }
    Keyboard.dismiss();
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      Alert.alert(error.message);
    }
    if (!session) {
      Alert.alert('Please check you inbox for email verification');
    }
    Keyboard.dismiss();
    setLoading(false);
  };

  useEffect(() => {
    if (email) {
      setUserEmail(email);
    }
  }, [email]);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}>
      <HeaderWithAuthBrand scrollOffsetY={scrollOffsetY} icon={faArrowLeft} />
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
          minHeight: '100%',
          margin: 15,
          // justifyContent: "center",
        }}>
        <View
          style={{
            minHeight: 100,
            gap: 5,
            marginVertical: 10,
          }}>
          <Text className="text-xl font-montserratRegular text-gray-900 ">
            Cria sua conta
          </Text>
          <Text className="text-sm font-montserratRegular text-gray-900">
            Criar conta é fácil, basta fornecer o seu password.
          </Text>
        </View>

        <View
          style={{
            gap: 20,
          }}>
          <CustomTextInput
            label="* Email"
            value={userEmail}
            onChangeText={handleUserEmail}
            placeholder={userEmail ? userEmail : 'Endereço Electrónico'}
          />

          <CustomTextInput
            label="* Senha"
            secureTextEntry={true}
            value={userPassword}
            onChangeText={handleUserPassword}
            placeholder={
              userPassword ? userPassword : 'Pelo menos 8 caracteres'
            }
          />
          <View
            style={{
              marginVertical: 10,
            }}>
            <MainButton
              onPress={() => {
                Keyboard.dismiss();
              }}
              title="Criar Conta"
            />
          </View>
          <TermsAndPolicies />
        </View>
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EmailPasswordRegistration;

const styles = StyleSheet.create({});
