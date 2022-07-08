import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color  from '../Theme/Color';
import { useDispatch } from 'react-redux';
import { addToCart, isProductExists, removeProduct } from '../Utils/LocalStorage';
import { cartCount, getTotal } from '../Redux/cartAction';
import Toast from "react-native-toast-message";


const CartItem = (props) => {
    const item = props.item;
    const [quantity, SetQuantity] = useState(item.count);
    const dispatch = useDispatch();
    const decrementCount = async (item) => {
        if (item.count > 1) {
            let data = await addToCart(item, 'minus');
            SetQuantity(data?.quantity);
            dispatch(cartCount(data?.count));
            dispatch(getTotal());
        }
        else {
            removeItem(item);
        }
    }

    const incrementCount = async (items) => {
        let data = await addToCart(items, 'add');
        SetQuantity(data?.quantity);
        dispatch(cartCount(data?.count));
        dispatch(getTotal());
    }

    const removeItem = async (item) => {
        let index = await isProductExists(item);
        let result = await removeProduct(index);
        if(result){
            Toast.show({
                type: "custom",
                text1: `${item.strMeal} successfully removed from the cart`,
                position:'bottom',
                visibilityTime: 1500,
              });
        }
        dispatch(cartCount(result.length));
        dispatch(getTotal());
        props.onPress(result);
    }

    return (
        <View style={styles.cartCard}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.strMealThumb,
                        }}
                    />
                </View>
                <View style={{ padding: 2, paddingLeft: 16 }}>
                    <Text style={styles.name} numberOfLines={2}>{item.strMeal}</Text>
                    <View style={styles.countIconBox}>
                        <TouchableOpacity
                            style={styles.countIcon}
                            onPress={() => {
                                decrementCount(item);
                            }}
                        >
                            <Ionicons name="remove-circle-outline" size={25} color={Color.Primary} />
                        </TouchableOpacity>
                        <Text style={styles.count}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.countIcon}
                            onPress={() => {
                                incrementCount(item);
                            }}
                        >
                            <Ionicons name="add-circle-outline" size={25} color={Color.Primary} />
                        </TouchableOpacity>

                        {/* <Text style={styles.weight}>x {item.attribute}</Text> */}
                    </View>
                </View>
            </View>
            <View style={styles.priceBox}>
                {/* <FontAwesome5
                    style={{ paddingTop: 2, paddingRight: 2 }}
                    name="rupee-sign"
                    color={Color.DarkGrey}
                    size={12}
                /> */}
                <Text style={styles.price}>Rs {100 * quantity}</Text>
                <TouchableOpacity onPress={() => {
                    removeItem(item)
                }}>
                    <Ionicons name="trash-outline" size={26} color={Color.Red} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default CartItem;

const styles = StyleSheet.create({
    cartCard: {
        padding: 8,
        marginTop: 2,
        borderRadius: 16,
        minWidth: "100%",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Color.White,
        borderColor: Color.LightGrey,
        borderWidth: 1,
        justifyContent: "space-between",
    },
    imageContainer: {
        padding: 8,
        borderRadius: 24,
    },
    image: {
        height: 70,
        width: 70,
    },
    name: {
        fontSize: 18,
        color: Color.DarkGrey,
        maxWidth: 150
    },
    count: {
        fontSize: 16,
        paddingLeft: 8,
        paddingRight: 8,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: Color.DarkGrey
    },
    countIconBox: {
        marginTop: 20,
        paddingBottom: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    countIcon: {
        backgroundColor: Color.PrimaryColor,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        padding: 5,
    },
    weight: {
        paddingLeft: 16,
        color: Color.DarkGrey,
    },
    priceBox: {
        padding: 12,
        height: 90,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.LightGrey,
    },
    price: {
        minWidth: 70,
        paddingRight: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 16
    },
})
