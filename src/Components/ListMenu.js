import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Color from '../Theme/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation,DrawerActions} from '@react-navigation/native';

const ListMenu = (props) => {
  let menu = props.item;
  let navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
        navigation.navigate(menu.route);
      }}>
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          <MaterialIcons name={menu.iconName} size={25} color={Color.White} />
          <Text style={styles.text}>{menu.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftWrapper: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 50,
    letterSpacing: 1,
    fontWeight: '600',
    color: Color.White,
  },
});

export default ListMenu;
