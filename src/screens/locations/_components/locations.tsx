import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import Geolocation from '@react-native-community/geolocation';
import collect from 'collect.js';
import {COLORS} from '../../../assets/colors';
import {Divider} from '@gluestack-ui/themed';
import {LocationItem} from './location-item';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackNavigationProps, FLAG} from '../../../assets/types/global-types';
import {districts, neighborhoods, provinces} from '../../../const/locations';

export type Item = {
  name: string;
  flag: FLAG;
};

type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export const Locations = React.memo(() => {
  const navigation = useNavigation<BackNavigationProps>();
  const [locationItem, setLocationItem] = useState<Item | undefined>();
  const [locationsList, setLocationsList] = useState<string[] | undefined>();
  const [currentUserLocation, setCurrentUserLocation] = useState<
    GeoCoordinates | undefined
  >();

  const handleLocationSelection = (location: Item) => {
    // Navigate back to Home screen if the selected location is a neighborhood
    if (location?.flag === FLAG.NEIGHBORHOOD && !!location?.name) {
      navigation.navigate({
        name: 'Home',
        params: {
          searchLocationKey: location?.name,
          flag: location?.flag,
        },
        merge: true,
      });
      return;
    }
    setLocationItem(prev => ({
      ...prev,
      flag: location?.flag,
      name: location?.name,
    }));
  };

  const navigateBack = () => {
    let searchLocationKey: string;
    let flag: FLAG;
    if (!locationItem?.flag) {
      flag = FLAG.COUNTRY;
      searchLocationKey = 'Moçambique';
    } else {
      flag = locationItem.flag;
      searchLocationKey = locationItem.name.includes('Província')
        ? locationItem.name.slice(12)
        : locationItem.name;
    }

    navigation.navigate({
      name: 'Home',
      params: {
        searchLocationKey,
        flag,
      },
      merge: true,
    });
    return;
  };

  const getCurrentUserLocation = () => {
    if (!currentUserLocation){
      Geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;
        setCurrentUserLocation({
          latitude,
          longitude,
        });
      });
    }
    else {
      setCurrentUserLocation(undefined);
    }
  };

  useEffect(() => {
    if (locationItem?.flag === FLAG.COUNTRY || !locationItem?.flag) {
      setLocationsList(provinces.provinces);
    }

    if (locationItem?.flag === FLAG.PROVINCE) {
      const item = collect(districts).first(
        item => item.province === locationItem.name,
      );

      setLocationsList(item.districts);
    }

    if (locationItem?.flag === FLAG.DISTRICT) {
      const item = collect(neighborhoods).first(
        item => item.district === locationItem.name,
      );
      setLocationsList(item.neighborhoods);
    }
  }, [locationItem]);

  return (
    <View className="px-2">
      {!locationItem?.flag && (
        <>
          <TouchableOpacity
            className="flex flex-row justify-start items-center h-16"
            onPress={getCurrentUserLocation}>
            <View>
              <Icon name="location-pin" color={COLORS.main} size={25} />
            </View>
            <View className="pl-6">
              <Text className="text-lg text-slate-900 font-normal">
                Minha localização
              </Text>
              <Text className="text-slate-500 text-[13px]">
                Toca para encontrar
              </Text>
            </View>
          </TouchableOpacity>
          {!!currentUserLocation && (
            <View className="bg-emerald-200/70 py-2 w-full justify-center items-center">
              <Text className='text-emerald-800 font-medium text-lg'>
                lat: {currentUserLocation?.latitude} & long:{' '}
                {currentUserLocation?.longitude}
              </Text>
            </View>
          )}
          <Divider />
        </>
      )}
      <TouchableOpacity
        className="flex flex-row justify-start items-center h-16"
        onPress={navigateBack}>
        <View>
          <Icon name="map" color={COLORS.main} size={25} />
        </View>
        <View className="pl-6">
          <Text className="text-lg text-slate-900 font-normal">
            {!locationItem?.flag ? 'Todo Moçambique' : `${locationItem.name}`}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider />
      {(!locationItem?.flag || locationItem.flag === FLAG.COUNTRY) && (
        <FlatList
          scrollEnabled={false}
          data={locationsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const customItem = {
              flag: FLAG.PROVINCE,
              name: item,
            };
            return (
              <LocationItem
                item={customItem}
                handleLocationSelection={handleLocationSelection}
              />
            );
          }}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <View className="h-20" />}
        />
      )}

      {locationItem?.flag === FLAG.PROVINCE && (
        <FlatList
          scrollEnabled={false}
          data={locationsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const customItem = {
              flag: FLAG.DISTRICT,
              name: item,
            };
            return (
              <LocationItem
                item={customItem}
                handleLocationSelection={handleLocationSelection}
              />
            );
          }}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <View className="h-20" />}
        />
      )}

      {locationItem?.flag === FLAG.DISTRICT && (
        <FlatList
          scrollEnabled={false}
          data={locationsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const customItem = {
              flag: FLAG.NEIGHBORHOOD,
              name: item,
            };
            return (
              <LocationItem
                item={customItem}
                handleLocationSelection={handleLocationSelection}
              />
            );
          }}
          ItemSeparatorComponent={() => <Divider />}
          ListFooterComponent={() => <View className="h-20" />}
        />
      )}
    </View>
  );
});
