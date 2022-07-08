import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Color from '../Theme/Color';
import Feather from 'react-native-vector-icons/Feather';
import ItemSeparator from '../Components/ItemSeperator';
import ListMenu from '../Components/ListMenu';
import { HOME, RESTAURANT_LIST, CART } from '../Constant/RouteName';
import { useDispatch } from 'react-redux';
import { Logout } from '../Redux/loginAction';


const SideMenuScreen = (props) => {
  const dispatch = useDispatch();
  const menuData = [
    {
      id: 1,
      title: 'Home',
      iconName: 'home',
      route: HOME,
    },
    {
      id: 2,
      title: 'Restaurants',
      iconName: 'store',
      route: RESTAURANT_LIST,
    },
    {
      id: 3,
      title: 'My Cart',
      iconName: 'shopping-cart',
      route: CART,
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../images/user.png')} style={styles.image} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>Test User</Text>
          <Text style={styles.email}>testUser@gmail.com</Text>
        </View>
      </View>
      <FlatList
        data={menuData}
        renderItem={({ item }) => <ListMenu item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        dispatch(Logout())
      }}>
        <View style={styles.leftWrapper}>
          <Feather
            size={25}
            name="log-out"
            color={Color.White}
            style={styles.icon}
          />
          <Text style={styles.text}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Black,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    // borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    color: Color.White,
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  email: {
    fontSize: 16,
    color: Color.White,
    letterSpacing: 0.5,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 50,
    letterSpacing: 1,
    fontWeight: '600',
    color: Color.White,
  },
});
