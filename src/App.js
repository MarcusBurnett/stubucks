import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Header from './header';
import Banner1 from './banner1';
import Banner2 from './banner2';
import Footer from './footer';
import Ad from './ad';
import Shop from './shop';
import LegalInfo from './legalInfo';

class App extends Component {
  state = {
    shop: [
      {
        title: "Coffee",
        info: "Hand-roasted coffee, delivered fresh for ultimate flavour.",
        image: require('./Assets/Images/buyCoffee.jpg'),
      },
      {
        title: "Tea",
        info: "Our finest selection of premium whole leaf tea.",
        image: require('./Assets/Images/buyTea.jpg'),
      },
      {
        title: "Equipment",
        info: "Brewers and presses for making the perfect Stu at home.",
        image: require('./Assets/Images/buyEquipment.png'),
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Banner1 />
        <Ad />
        <Banner2 />
        <Shop shop={this.state.shop}/>
        <Footer />
        <LegalInfo />
      </div>
    );
  }
}

export default App;
