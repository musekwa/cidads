import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import {Text} from 'react-native';

import {FLAG} from '../../../assets/types/global-types';
import { Item } from './locations';

interface LocationItemProps {
  item: Item;
  handleLocationSelection: (item: Item) => void;
}

export const LocationItem = ({
  item,
  handleLocationSelection,
}: LocationItemProps) => {
  let label = item.name;
  if (item.flag === FLAG.PROVINCE && item.name.includes('Província')) {
    label = label.slice(12);
  }

  return (
    <TouchableOpacity
      onPress={()=>handleLocationSelection(item)}
      className="flex flex-row justify-between items-center h-16 px-3">
      <View className="">
        <Text className="text-lg text-slate-900 font-normal">{label}</Text>
      </View>

      <Icon name="arrow-forward-ios" color={COLORS.slategrey} size={20} />
    </TouchableOpacity>
  );
};
