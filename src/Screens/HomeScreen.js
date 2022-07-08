import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../Components/Header';
import Color from '../Theme/Color';
import FoodList from '../Components/FoodList';
import {HomePage} from '../ServerApi/ServerRequest';
import Loader from '../Components/Loader';
import restaurantsData from '../Data/restaurant.json';
import Restaurant from '../Components/Restaurant';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      restaurantData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getHomePage();
  }

  getHomePage = () => {
    HomePage()
      .then(response => {
        this.setState({
          categoryData: response.data.meals,
          restaurantData: restaurantsData,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Home"
          icon="menu" 
          showCart="true"
        />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <View style={styles.body}>
            <View>
              <Text style={styles.exploretext}>Explore variety of foods</Text>
              <FlatList
                data={this.state.categoryData}
                horizontal
                keyExtractor={e => e.idMeal}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 20,
                }}
                ItemSeparatorComponent={() => <View style={{width: 25}} />}
                renderItem={({item}) => <FoodList category={item} />}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.exploretext}>Explore Hotels</Text>
              <FlatList
                data={this.state.restaurantData}
                keyExtractor={e => e.name}
                renderItem={({item}) => (
                  <Restaurant key={item.id} restaurant={item} />
                )}
              />
            </View>
          </View>
        )}
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
  exploretext: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 23,
    color: Color.Primary,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
});

export default HomeScreen;
