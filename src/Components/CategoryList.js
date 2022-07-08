import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Color from '../Theme/Color';

const CategoryList = props => {
  let categories = props.category;
  const [catergoryIndex, setCategoryIndex] = useState(0);

  const selectedCategory = (item, index) => {
    setCategoryIndex(+index);
    props.onPress(item.strCategory);
  };

  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} >
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity style={styles.container}
            key={index}
            activeOpacity={0.8}
            onPress={() => selectedCategory(item, index)}>
            <Text
              style={[
                styles.categoryText,
                catergoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item.strCategory}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'space-between',
  },
  container:{
    marginLeft:10,
    marginRight:10,
    justifyContent: 'space-between',
    marginBottom:10
  },
  categoryText: {
    fontSize: 17,
    color: Color.White,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  categoryTextSelected: {
    color: Color.Primary,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderColor: Color.Primary,
    justifyContent: 'space-between',
  },
});
