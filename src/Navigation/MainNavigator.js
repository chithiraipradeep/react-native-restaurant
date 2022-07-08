import React, { useEffect } from 'react';
import { HOME,RESTAURANT, RESTAURANT_LIST,CART } from '../Constant/RouteName';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/RestaurantScreen';
import SideMenuScreen from '../Screens/SideMenuScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import RestaurantListScreen from '../Screens/RestaurantListScreen';
import { getCount, getTotal } from '../Redux/cartAction';
import { useDispatch,useSelector } from 'react-redux';
import CartScreen from '../Screens/CartScreen';

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const MainNavigator = (props) => {
  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(getCount());
    await dispatch(getTotal());
  }

  useEffect(() => {
    init();
  }, [])


  const createDrawer = (props) => (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName={HOME} drawerContent={props => <SideMenuScreen {...props} />}>
      <Drawer.Screen name={HOME} component={HomeScreen} />
    </Drawer.Navigator>
  );


  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={HOME}
        children={createDrawer}
      />
      <MainStack.Screen name={RESTAURANT} component={RestaurantScreen} />
      <MainStack.Screen name={RESTAURANT_LIST} component={RestaurantListScreen} />
      <MainStack.Screen name={CART} component={CartScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
