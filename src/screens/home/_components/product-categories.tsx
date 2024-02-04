import React from 'react';
import {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';

interface ProductCategoriesProps<T> {
  categories: T[];
  columns?: number;
  renderCategory(item: T): JSX.Element;
}

export const ProductCategories = <T extends any>({
  categories,
  renderCategory,
  columns = 2,
}: ProductCategoriesProps<T>) => {
    const deviceWidth = Dimensions.get("window").width;
  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 5,
    }}>
      {
        categories.map((cat, index)=>{
            return (
                <View 
                    key={index}
                style={{
                    width: deviceWidth / columns,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {renderCategory(cat)}
                </View>
            )
        })
      }
    </View>
  );
};
