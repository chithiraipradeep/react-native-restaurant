import AsyncStorage from '@react-native-community/async-storage';

const CART = 'cart';
const TOKEN = 'token';

export const setToken = token => {
    AsyncStorage.setItem(TOKEN, token);
};

export const getToken = async () => {
    try {
        let token = await AsyncStorage.getItem(TOKEN);
        return token;
    } catch (error) {
        console.log('Error :', error);
        return null;
    }
};

export const removeStorage = async () => {
    await AsyncStorage.clear();
};

export const setCart = cart => {
    AsyncStorage.setItem(CART, JSON.stringify(cart));
};

export const getCart = async () => {
    try {
        let cartDetails = await AsyncStorage.getItem(CART);
        cartDetails = JSON.parse(cartDetails);
        return cartDetails;
    } catch (error) {
        console.log('Error :', error);
        return null;
    }
};

export const getCartCount = async () => {
    try {
        let cartDetails = await AsyncStorage.getItem(CART);
        cartDetails = JSON.parse(cartDetails);
        return (cartDetails != null) ? cartDetails.length : null;
    } catch (error) {
        console.log('Error :', error);
        return null;
    }
};



export const isProductExists = async (item) => {
    let cart = await getCart();
    let cartListData = cart !== null ? cart : [];
    let itemIndex = cartListData.findIndex(cartItem => cartItem.idMeal === item.idMeal);
    if (itemIndex === -1) {
        return -1;
    } else {
        return itemIndex;
    }
}

export const addToCart = async (item, type) => {
    let cart = await getCart();
    let cartListData = cart !== null ? cart : [];
    if (cartListData === []) {
        item['count'] = 1;
        cartListData.push(item);
        setCart(cartListData);
    }
    else {
        let index = await isProductExists(item);
        if (index === -1) {
            item['count'] = 1;
            cartListData.push(item);
            setCart(cartListData);
        }
        else {
            if (type === 'add') {
                cartListData[index].count += 1;
                item.count = cartListData[index].count;
                setCart(cartListData);
            }
            else {
                cartListData[index].count -= 1;
                item.count = cartListData[index].count;
                setCart(cartListData);
            }
        }
    }
    let data = {
        count: cartListData.length,
        quantity: item.count
    }
    return data;
}

export const getTotalPrice = async () => {
    let cartList = await getCart();
    let totalPrice = 0;
    if (cartList.length) {
        await cartList.forEach(item => {
            item['cartAmount'] = item.count * 100;
            totalPrice += item.cartAmount;
        });
    }
    return totalPrice;
}

export const removeProduct = async (index) => {
    let cart = await getCart();
    let cartListData = cart !== null ? cart : [];
    cartListData.splice(index, 1);
    setCart(cartListData);
    return cartListData;
}