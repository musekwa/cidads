import { ImageSourcePropType } from "react-native";

// searching product by location
export enum FLAG {
    COUNTRY = "COUNTRY",
    PROVINCE = "PROVINCE",
    DISTRICT = "DISTRICT",
    NEIGHBORHOOD = "NEIGHBORHOOD",
  }

export interface BackNavigationProps {
    [x: string]: any;
    name: string;
    merge?: boolean;
    params?: {};
  }

  export type SubcategoryItem = {
    name: string;
    imagem: ImageSourcePropType | undefined;
    numberOfProducts: number;
  };
  