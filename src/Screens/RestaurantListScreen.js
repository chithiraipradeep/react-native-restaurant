import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Header from '../Components/Header';
import Color from '../Theme/Color';
import Loader from '../Components/Loader';
import restaurantsData from '../Data/restaurant.json';
import Restaurant from '../Components/Restaurant';

export class RestaurantListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: [],
      isLoading: true,
    };
  }

  componentDidMount() { 
    this.setState({
      restaurantData: restaurantsData,
      isLoading: false,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Restaurants"
          icon="arrow-back" 
          showCart="true"
        />
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.restaurantData}
            keyExtractor={e => e.name}
            renderItem={({item}) => (
              <Restaurant key={item.id} restaurant={item} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
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
});

export default RestaurantListScreen;
