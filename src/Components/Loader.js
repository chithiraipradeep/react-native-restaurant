import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Color from '../Theme/Color';

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={70} color={Color.White} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    opacity:0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
