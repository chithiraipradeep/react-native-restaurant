import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './src/Navigation/AuthNavigator';
import MainNavigator from './src/Navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider,useSelector,useDispatch } from 'react-redux';
import { Store } from './src/Redux/store';
import Toast from "react-native-toast-message";
import ToastConfig from './src/Utils/ToastConfig';
import {Init} from './src/Redux/loginAction';
import Loader from './src/Components/Loader';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  }

  useEffect(() => {
    init();
  }, [])

  const token = useSelector(state => state.loginReducer);

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <NavigationContainer>
      {
        token.authToken ? <MainNavigator /> : <AuthNavigator />
      }
      <Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20
  }
})
