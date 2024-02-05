import React from "react";
import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import { NavigationProps } from "../assets/types/global-types";





export const TermsAndPolicies = ({})=>{

    const navigation = useNavigation<NavigationProps>();

    return (
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
    )
}