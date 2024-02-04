import {
  View,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {COLORS} from '../assets/colors';
import {SubcategoryItem} from '../assets/types/global-types';
import {Box, HStack} from '@gluestack-ui/themed';

interface SubcategoriesWrapperProps {
  subcategories: SubcategoryItem[] | undefined;
}

const SubcategoriesWrapper = ({subcategories}: SubcategoriesWrapperProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        margin: 5,
        paddingBottom: 100,
      }}>
      <View className="mt-4">
        {subcategories?.map((subcategory, index) => (
          <TouchableOpacity key={index} className='border-y border-slate-300 min-h-[90px] justify-center my-2'>
            <HStack
              space="sm"
              // justifyContent=''
            >
              <Box
                w="$1/5"
                alignItems='center'
                justifyContent='center'
                bg='$blueGray300'
              >
                <Image
                  style={{
                    width: '100%',
                    height: 60,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/images/vehicles.png')}
                />
              </Box>
              <Box
                w="$3/5"
                justifyContent='center'
              >
                  <Text 
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    className='text-slate-950 text-lg font-montserratMedium leading-5'
                  >{subcategory.name}</Text>
                  <Text className='text-slate-500 text-sm font-montserratRegular'>{subcategory.numberOfProducts} anúncios</Text>

              </Box>
              <Box
                w="$1/5"
                justifyContent='center'
              >
                <Icon
                  name="arrow-forward-ios"
                  color={COLORS.slategrey}
                  size={20}
                />
              </Box>
            </HStack>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SubcategoriesWrapper;
