import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../../../assets/colors';
import React, {useState} from 'react';
import {Icon} from '@rneui/base';
import {Divider} from 'react-native-paper';
import {Trending} from './trending-product';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';


const data = [
  {
    id: 1,
    name: 'babysitter',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Maputo, Mavalane A',
  },
  {
    id: 1,
    name: 'babysitter',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Maputo, Mavalane A',
  },
  {
    id: 1,
    name: 'babysitter',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura,  na área',
    address: 'Maputo, Mavalane A',
  },
  {
    id: 1,
    name: 'Administrador da Empresa Akambano',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Maputo, Mavalane A',
  },
  {
    id: 1,
    name: 'babysitter',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Maputo, Mavalane A',
  },
  {
    id: 1,
    name: 'Babá',
    salaryRange: '2000 - 3000',
    category: 'job-seeking',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Nampula, Namutequeliua',
  },
  {
    id: 1,
    name: 'Secretária Doméstica Secretária Doméstica Secretária Doméstica',
    salaryRange: '2000 - 3000',
    category: 'phone',
    description: 'Um babá à altura, com 2 anos de experiencia na área',
    address: 'Maputo, Albazine',
  },
  {
    id: 1,
    name: 'Sofá',
    salaryRange: '30000',
    category: 'home',
    description: 'Ainda em bom estado, negociável.',
    address: 'Maputo, Polana',
  },
  {
    id: 1,
    name: 'Informático',
    salaryRange: '2000 - 3000',
    category: 'vacancy',
    description: 'Técnico com a licenciatura em Informática',
    address: 'Matola',
  },
];

export const TrendingProducts = ({ }) => {
  const [isGridLayout, setIsGridLayout] = useState(false);
  



  const handleChangeLayout = () => {
    setIsGridLayout(!isGridLayout);
  };
  return (
    <>
      <View className="bg-slate-200 h-12 flex flex-row justify-between items-center px-2 mb-4">
        <View>
          <Text className="text-slate-950 text-lg font-medium">Tendências</Text>
        </View>
        <View className="flex flex-row gap-4">
          <TouchableOpacity
            className="rounded-full p-2"
            onPress={() => {
              if (isGridLayout) {
                handleChangeLayout();
              }
            }}>
            <Icon
              name="view-list"
              size={38}
              color={!isGridLayout ? COLORS.main : COLORS.lightslategrey}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-full p-2"
            onPress={() => {
              if (!isGridLayout) {
                handleChangeLayout();
              }
            }}>
            <Icon
              name="grid-view"
              size={35}
              color={isGridLayout ? COLORS.main : COLORS.lightslategrey}
            />
          </TouchableOpacity>
        </View>
      </View>

      {!isGridLayout && (
        <FlatList
          scrollEnabled={false}
          data={data}
          ListFooterComponent={() => <View />}
          ListFooterComponentStyle={{
            marginTop: 100,
          }}
          renderItem={({item, index}) => {
            return <Trending trendingItem={item} isGridLayout={isGridLayout} />;
          }}
          keyExtractor={(item, index) => index?.toString()}
        />
      )}

      {isGridLayout && (
        <View className="flex items-center justify-center">
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            ListFooterComponent={() => <View />}
            ListFooterComponentStyle={{
              marginTop: 100,
            }}
            renderItem={({item, index}) => {
              return (
                <Trending trendingItem={item} isGridLayout={isGridLayout} />
              );
            }}
            keyExtractor={(item, index) => index?.toString()}
          />
        </View>
      )}
    </>
  );
};
