import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ProductItem = {
  name: string;
  imagem: ImageSourcePropType | undefined;
  id: number;
  category: string;
};

interface CategoryProps {
  product: ProductItem;
  scrollDown: () => void;
}

export interface NavigationProps {
  [x: string]: any;
  name: string;
  merge?: boolean;
  params?: {};
}

export const Category = ({product, scrollDown}: CategoryProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => {
        if (product.category === 'trending') {
          scrollDown();
          return;
        }
        navigation.navigate({
          name: 'ProductCategories',
          params: {
            category: product.category,
          },
        });
      }}
      className="
        m-2 h-28 w-28 
        p-1 justify-between items-center
      ">
      <View
        className={`
          rounded-md shadow-md bg-slate-200
           h-20 w-20
           justify-center items-center
        `}>

        <ImageBackground
          source={product.imagem}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            // resizeMode: 'contain',
          }}
        />
      </View>

      <View className="w-28">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-center text-[10px] font-montserratBold text-slate-950"
          >
          {product.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
