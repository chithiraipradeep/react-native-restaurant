import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Color from '../Theme/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import { addToCart } from '../Utils/LocalStorage';
import { useDispatch } from 'react-redux';
import { cartCount,getTotal} from '../Redux/cartAction';
import Toast from "react-native-toast-message";


const ItemList = props => {
  let item = props.item;
  const dispatch = useDispatch();

  const callAddToCart = async (item) => {
    let data = await addToCart(item, 'add');
    if(data){
      Toast.show({
          type: "custom",
          text1: `${item.strMeal} successfully added to the cart`,
          position:'bottom',
          visibilityTime: 1500,
        });
  }
    dispatch(cartCount(data?.count));
    dispatch(getTotal());
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemBox}>
        <Image
          style={styles.image}
          source={{
            uri: item.strMealThumb,
          }}
        />
        <View style={styles.item_middle_info}>
          <Text style={styles.dish_name} numberOfLines={2}>{item.strMeal}</Text>
          <Text style={styles.dish_price} allowFontScaling={true}>
            <Text style={styles.currency}>₹ </Text>
            100
          </Text>
          <TouchableOpacity style={styles.buttons} onPress={() => {
            callAddToCart(item)
          }}>
            <Icon
              name="ios-add-circle-outline"
              style={styles.button_icon}
              color="#26a69a"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    padding: 10,
    borderColor: '#e5e5e5',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  itemBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
    resizeMode: 'cover'
  },
  item_middle_info: {
    marginLeft: 5,
  },
  dish_name: {
    fontSize: 15,
    color: Color.White,
    maxWidth: '75%',
    minWidth: '75%',
    alignSelf: 'flex-start'
  },
  dish_price: {
    color: Color.White,
    fontSize: 15,
    alignSelf: 'flex-start'
  },
  buttons: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  button_icon: {
    fontSize: 35,
    fontWeight: 'bold'
  },
});
