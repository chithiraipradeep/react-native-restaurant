import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../Theme/Color';
import { useSelector } from 'react-redux';


function CartIcon(props) {

  const cart_Count = useSelector(state => state.cartReducer.count);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        display: 'flex',
        height: 45,
        width: 30,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={styles.badgeContainer}>
        {props.icon ? (
          <Icon
            name={props.icon}
            size={25}
            color={Color.White}
          />
        ) : null}
        {cart_Count && cart_Count > 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart_Count}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -16,
    right: -6,
    alignItems: 'center',
    backgroundColor: Color.Primary,
    borderRadius: 20,
    width: 22,
    height: 22,
    textAlign: 'center',
    paddingTop: 2,
    fontSize: 10,
    color: Color.Black,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color:Color.White,
    marginTop:-1
  },
});

export default CartIcon;
