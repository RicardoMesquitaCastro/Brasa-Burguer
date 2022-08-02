import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

//import component
import Food from "./Food";
import Cart from "./Cart";
//import Address from "./Address";
import Profile from "./Profile";
import Adicionals from './Adicionals';


var {width} = Dimensions.get("window")

console.disableYellowBox = true;


export default class index extends Component {

  constructor(props) {
     super(props);
     this.state = {
       module:1, 
     };
  }

  render() {
    return (
      <View style={{flex:1}}>
          {
          this.state.module==1?    
         <Food/>
         :this.state.module==2?  
         <Cart/> 
         :this.state.module==3? 
         <Adicionals/>
         :<Profile/>
          }
          
          
      </View>
    );
  }
}


