import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
}

export const CustomSafeAreaView = ({children}: CustomSafeAreaViewProps) => {
  const {styles} = useStyles(stylesheet);
  return (
    <SafeAreaView
    style={styles.container}
    >
      {children}
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
