import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  // Vibration,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
