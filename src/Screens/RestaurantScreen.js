import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Color from '../Theme/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from '../Components/CartIcon';
import { getCategoty, getCategotyItems } from '../ServerApi/ServerRequest';
import CategoryList from '../Components/CategoryList';
import Loader from '../Components/Loader';
import ItemList from '../Components/ItemList';
import { CART } from '../Constant/RouteName';


export class RestaurantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      restaurant: Object.assign(this.props.route.params.data),
      categoryData: [],
      ItemsData: [],
    };
  }

  async componentDidMount() {
    await getCategoty()
      .then(response => {
        this.setState({
          categoryData: response.data.categories,
        });
        this.getItems(this.state.categoryData[0].strCategory);
      })
      .catch(error => {
        console.log(error);
      });
  }

  async getItems(category) {
    this.setState({
      isLoading: true,
    });
    await getCategotyItems(category)
      .then(response => {
        this.setState({
          ItemsData: response.data.meals,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: this.state.restaurant.image,
            }}
          />
          <View style={styles.ImageContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrow-back" color={Color.White} size={28} />
            </TouchableOpacity>
            <View style={styles.cart}>
              <CartIcon icon="shopping-cart" onPress={()=>{
                navigation.navigate(CART)
              }} />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{this.state.restaurant.name}</Text>
            <Text style={styles.location}>
              {this.state.restaurant.location}
            </Text>
            <Text style={styles.type}>
              {this.state.restaurant.isVegetarian ? (
                <Text style={{ color: '#4caf50', fontWeight: 'bold' }}>Veg</Text>
              ) : (
                <Text style={{ color: '#a92319', fontWeight: 'bold' }}>
                  Non-Veg
                </Text>
              )}
            </Text>
            <Text style={styles.cuisine}>{this.state.restaurant.cuisine}</Text>
          </View>
        </View>
        <View style={{ flex: 1,maxHeight:50 }}>
          {this.state.categoryData.length ? (
            <CategoryList
              category={this.state.categoryData}
              onPress={name => {
                this.getItems(name);
              }}
            />
          ) : null}
        </View>
        <View style={styles.footer}>
          <FlatList
            data={this.state.ItemsData}
            keyExtractor={e => e.idMeal}
            renderItem={({ item }) => <ItemList item={item} />}
          />
        </View>

        {this.state.isLoading ? <Loader /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Black,
  },
  header: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  footer: {
    flex: 2,
    alignItems: 'baseline',
    backgroundColor: Color.Black,
  },
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 10,
  },
  cart: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    right: 10,
  },
  ImageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '100%',
  },
  textContainer: {
    marginTop: 10,
    padding: 16,
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  location: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
  type: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    marginLeft: 20,
    marginBottom: 30,
  },
  cuisine: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
});

export default RestaurantScreen;
