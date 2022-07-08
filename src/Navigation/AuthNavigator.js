import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { HOME, LOGIN,OTP, RESTAURANT } from '../Constant/RouteName';
import LoginScreen from '../Screens/LoginScreen';
import OtpScreen from '../Screens/OtpScreen';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/RestaurantScreen';

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <AuthStack.Screen name={LOGIN} component={LoginScreen} />
            <AuthStack.Screen name={OTP} component={OtpScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;