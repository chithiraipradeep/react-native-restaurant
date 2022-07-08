import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Color from '../Theme/Color';

const FoodList = props => {
  let category = props.category;
  return (
    <View>
      <View style={styles.CategoryBoxContainer}>
        <Image source={{
          uri:`${category.strMealThumb}`,
        }} style={styles.image} />
      </View>
      <Text style={styles.text} numberOfLines={2}>
        {category.strMeal}
      </Text>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  CategoryBoxContainer: {
    marginTop: 15,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: Color.White,
  },
  image: {
    resizeMode: 'cover',
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  text: {
    marginTop: 5,
    color: Color.White,
    width: 90,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    letterSpacing: 0.5,
  },
});
