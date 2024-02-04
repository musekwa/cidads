import React from 'react';
import {BottomTabNavigator} from './src/navigation/tabs/BottomTab';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './src/assets/ui-kitten-theme.json';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {PaperProvider} from 'react-native-paper';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from './tamagui.config';
import RootNavigation from './src/navigation/root/Root';
import "./src/style/unistyles"


const App = () => {
  return (
    <SafeAreaProvider>
        <TamaguiProvider config={tamaguiConfig}>
          <PaperProvider>
            <GluestackUIProvider config={config}>
              <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
                <RootNavigation />
              </ApplicationProvider>
            </GluestackUIProvider>
          </PaperProvider>
        </TamaguiProvider>
      </SafeAreaProvider>
  );
};

export default App;
