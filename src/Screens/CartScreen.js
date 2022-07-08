import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../Components/Header';
import Color from '../Theme/Color';
import CartIcon from '../Components/CartIcon';
import { getCart } from '../Utils/LocalStorage';
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import EmptyCart from '../images/emptycart.png';
import { HOME } from '../Constant/RouteName';

export class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cartItems: [],
        };
    }

    async componentDidMount() {
        let cartItem = await getCart();
        this.setState({
            cartItems: cartItem ? cartItem : [],
            isLoading: false,
        });
    }

    async removeItem(item) {
        this.setState({
            cartItems: item,
            isLoading: false,
        });
    }


    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <Header
                    title="My Cart"
                    icon="arrow-back"
                    showCart="false"
                >
                    <CartIcon icon="shopping-cart" />
                </Header>
                {
                    this.state.cartItems.length > 0 ? <FlatList
                        style={{ margin: 10, marginBottom: 50 }}
                        data={this.state.cartItems}
                        renderItem={({ item, index }) =>
                            <CartItem item={item} onPress={(data) => {
                                this.removeItem(data);
                            }} />
                        }
                        keyExtractor={item => item.idMeal}
                        extraData={this.state}
                    /> : <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                        <View style={styles.imgContainerStyle}>
                            <Image style={styles.imageStyle} source={EmptyCart} />
                        </View>
                        <Text style={styles.title}>Your cart is currently empty </Text>
                        <TouchableOpacity
                            style={styles.shopBtn}
                            onPress={() => {
                                this.props.navigation.navigate(HOME);
                            }}
                        >
                            <Text style={styles.shopBtnTxt}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                }
                {this.state.isLoading ? (
                    <Loader />
                ) : null
                }
                {
                    this.state.cartItems.length > 0 ? <Checkout /> : null
                }
            </SafeAreaView>
        )
    }
}

export const Checkout = () => {
    const total = useSelector(state => state.cartReducerTotal.totalAmount);
    const navigation = useNavigation();
    return (
        <View style={styles.checkoutContainer}>
            <View style={{ width: '50%' }}>
                <Text style={styles.total_price}>
                    Total: Rs {total}
                </Text>
            </View>
            <View style={{ width: '50%' }}>
                <TouchableOpacity
                    style={styles.checkout_container}
                    onPress={() => {

                    }}>
                    <Text style={styles.checkout}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Black,
    },
    body: {
        flex: 1,
        backgroundColor: Color.Black,
    },
    checkoutContainer: {
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: Color.Primary,
        display: 'flex',
        flex: 1,
    },
    checkout_container: {
        textAlign: 'center',
        height: 50,
        backgroundColor: Color.Primary,
        color: Color.White,
    },
    checkout: {
        width: '100%',
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: Color.White,
    },
    total_price: {
        height: 50,
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        backgroundColor: Color.White,
        color: Color.Primary,
    },
    imgContainerStyle: {
        height: 250,
        width: 250,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        resizeMode: 'center'
    },
    title: {
        color: Color.White,
        fontSize: 25,
        marginBottom: 20,
    },
    shopBtn: {
        textAlign: 'center',
        height: 60,
        width: '60%',
        backgroundColor: Color.Primary,
        color: Color.White,
        justifyContent: 'center',
        borderRadius: 20,
    },
    shopBtnTxt: {
        textAlign: 'center',
        color: Color.White,
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default CartScreen
