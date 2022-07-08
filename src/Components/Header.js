import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Color from '../Theme/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from './CartIcon';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../Constant/RouteName';


const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.Black} barStyle="light-content" />
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {props.icon ? (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => {
              if (props.icon === 'menu') {
                navigation.openDrawer();
              }
              else {
                navigation.goBack();
              }
            }}>
            <Icon name={props.icon} size={25} color={Color.White} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.headertitle}>{props.title}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 10,
        }}>
        {
          props.showCart === 'true' ? <CartIcon icon="shopping-cart" onPress={() => {
            navigation.navigate(CART);
          }} /> : null
        }
        {props.children}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    backgroundColor: Color.Black,
    height: 62,
    flexDirection: 'row',
    color: Color.white,
    alignItems: 'center',
  },
  menu: {
    padding: 10,
  },
  headertitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Color.White,
    marginRight: 20,
    textAlign: 'center',
  },
});
