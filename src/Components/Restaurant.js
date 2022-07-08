import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {RESTAURANT} from '../Constant/RouteName';

const Restaurant = props => {
  let restaurant = props.restaurant;
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(RESTAURANT, {
          data: restaurant,
        });
      }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: restaurant.image}} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.location}>{restaurant.location}</Text>
          <Text style={styles.type}>
            {restaurant.isVegetarian ? (
              <Text style={{color: '#4caf50', fontWeight: 'bold'}}>Veg</Text>
            ) : (
              <Text style={{color: '#a92319', fontWeight: 'bold'}}>
                Non-Veg
              </Text>
            )}
          </Text>
          <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 6,
    height: 250,
  },
  image: {
    backgroundColor: '#ccc',
    position: 'absolute',
    width: '100%',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    resizeMode:'cover'
  },
  textContainer: {
    marginTop:5,
    padding: 16,
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  location: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
  type: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    marginLeft: 20,
    marginBottom: 30,
  },
  cuisine: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
});
