import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { OTP } from '../Constant/RouteName';
import Color from '../Theme/Color';

const LoginScreen = ({ navigation }) => {
    const [phone, SetPhone] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.Black} barStyle="light-content" />
            <ImageBackground source={require('../images/bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Enter Mobile Number</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="mobile"
                            color={Color.White}
                            size={27}
                        />
                        <TextInput
                            selectionColor='white'
                            keyboardType='numeric'
                            style={styles.textInput}
                            autoCapitalize="none"
                            maxLength={10}
                            onChangeText={(val) => {
                                SetPhone(val);
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                if (phone.length === 10) {
                                    navigation.navigate(OTP, {
                                        phone: phone
                                    })
                                }
                            }}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: Color.White,
        fontSize: 20,
        marginBottom: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: Color.White,
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 15,
        color: Color.White,
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 1
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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
    }
})
