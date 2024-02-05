import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import {HeaderWithSearchbar} from '../../components/header-with-searchbar';
import {COLORS} from '../../assets/colors';
import SubcategoriesWrapper from '../../components/subcategories-wrapper';
import {SubcategoryItem} from '../../assets/types/global-types';
import collect from 'collect.js';
import {categories} from '../../const/categories';

export default function ProductCategoriesScreen({route, navigation}: any) {
  const {category} = route.params;
  const [subcategories, setSubcategories] = useState<
    SubcategoryItem[] | undefined
  >();

  const navigateToProductSearchScreen = () => {
    navigation.navigate({
      name: 'ProductSearch',
      params: {
        searchPlaceholder: 'A procura de...',
      },
    });
  };
  useEffect(() => {
    if (!!category) {
      const foundSubcategories = collect(categories).first(
        item => item.category === category,
      );

      if (foundSubcategories) {
        setSubcategories(foundSubcategories.subcategories);
      } else {
        navigateToProductSearchScreen();
      }
    }
  }, [category]);

  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutRight.duration(300)}>
      <HeaderWithSearchbar bgColor={COLORS.main} placeholder="A procura de..." />
      <SubcategoriesWrapper subcategories={subcategories} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
