import {
  View,
  StatusBar,
  TouchableOpacity,
  Animated as RNAnimated,
  RefreshControl,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {CustomSafeAreaView} from '../../components/safe-are-view';
import {COLORS} from '../../assets/colors';
import {ProductCategories} from './_components/product-categories';
import {productCategories} from '../../const/product-categories';
import {Category} from './_components/category';
import {TrendingProducts} from './_components/trending-products';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  withSpring,
} from 'react-native-reanimated';
import {Icon} from '@rneui/base';
import {HomeScreenHeader} from './_components/home-header';

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};


const HomeScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const [trendingProductsOffsetY, setTrendingProductsOffsetY] = useState(0);

  const scrollHandler = useScrollViewOffset(scrollRef);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollHandler.value > 1000 ? withSpring(1) : withSpring(0),
    };
  });

  const onScrollTop = () => {
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  const scrollDown = () => {
    scrollRef.current?.scrollTo({
      x: 0,
      y: trendingProductsOffsetY,
      animated: true,
    });
  };

  // searchParams (searchLocationKey and flag)
  const params = route.params;
  const [searchLocationKey, setSearchLocationKey] = useState<
    string | undefined
  >();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    if (params?.searchLocationKey) {
      setSearchLocationKey(params.searchLocationKey);
    } else {
      setSearchLocationKey('Moçambique');
    }
  }, [navigation, route]);


  return (
    <CustomSafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />

      <HomeScreenHeader
        searchLocationKey={searchLocationKey}
        setSearchLocationKey={setSearchLocationKey}
        value={scrollOffsetY}
      />

      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={5}
        bounces={true}
        contentContainerStyle={{}}
        onScroll={RNAnimated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ProductCategories
          columns={3}
          categories={productCategories}
          renderCategory={cat => (
            <Category product={cat} scrollDown={scrollDown} />
          )}
        />
        <View
          onLayout={({nativeEvent}) => {
            setTrendingProductsOffsetY(nativeEvent.layout.y);
          }}>
          <TrendingProducts />
        </View>
      </Animated.ScrollView>
      <Animated.View
        className="absolute bottom-4 right-6"
        style={[buttonStyle]}>
        <TouchableOpacity
          onPress={onScrollTop}
          className="p-2 bg-[#2167ff] opacity-60 rounded-full items-center justify-center">
          <Icon name="arrow-upward" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </Animated.View>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
