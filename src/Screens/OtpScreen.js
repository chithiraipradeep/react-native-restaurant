import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../Theme/Color';
import OTPTextView from 'react-native-otp-textinput';
import user from '../Data/user.json'
import { useDispatch } from 'react-redux';
import { Login } from '../Redux/loginAction';
import { useNavigation } from '@react-navigation/native';
import Toast from "react-native-toast-message";


const OtpScreen = (props) => {
    let phone = props.route.params.phone;
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const LoginAccount = () => {
        user.forEach((el) => {
            if (el.phone === phone) {
                dispatch(Login(el.userToken));
            }
            else {
                Toast.show({
                    type: "custom",
                    text1: 'Mobile Number not exists',
                    position:'bottom',
                    visibilityTime: 1500,
                  });
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.Black} barStyle="light-content" />
            <ImageBackground source={require('../images/bg.png')} resizeMode="cover" style={styles.image}>
                <View style={{ flex: 1 }} >
                    <TouchableOpacity style={styles.backBtn} onPress={() => {
                        navigation.goBack()
                    }}>
                        <Icon name="arrow-back" color={Color.White} size={27} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Account Verfication</Text>
                    <Text style={styles.subText}>We have sent a SMS with an OTP code to your mobile number +91{phone}</Text>
                </View>
                <View style={styles.footer}>
                    <OTPTextView
                        ref={(e) => { }}
                        containerStyle={styles.textInputContainer}
                        textInputStyle={styles.roundedTextInput}
                        tintColor={Color.White}
                        offTintColor={Color.White}
                        handleTextChange={(text) => {
                            setOtp(text);
                        }}
                        inputCount={6}
                        keyboardType="numeric"
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                if (otp.length === 6) {
                                    LoginAccount()
                                }
                            }}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Verify OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    backBtn: {
        marginTop: 20,
        marginLeft: 20
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    textHeader: {
        textAlign: 'center',
        color: Color.White,
        fontSize: 25,
        fontWeight: '700'
    },
    subText: {
        marginTop: 15,
        color: Color.White,
        fontSize: 21,
        lineHeight: 30,
        textAlign: 'center'
    },
    footer: {
        flex: 3,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
        color: Color.Black,
        backgroundColor: Color.White
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Color.White,
        marginTop: 10,
        marginBottom: 15
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    otpBoxesContainer: {
        flexDirection: 'row'
    },
    otpBox: {
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'grey',
        height: 45,
        width: 45,
        textAlign: 'center'
    }
})
