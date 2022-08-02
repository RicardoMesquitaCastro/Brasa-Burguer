import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions,StyleSheet } from 'react-native';

//import component
import Food from "./Food";
import Cart from "./Cart";
import Profile from "./Profile";
import Adicionals from './Adicionals';

import Badge from '../components/badge/Badge';

var {width} = Dimensions.get("window")

//console.disableYellowBox = true;
import Icon from 'react-native-vector-icons/Ionicons';


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
          <Food />
          :this.state.module==2? 
          <Cart />
          :this.state.module==3? 
          <Adicionals />
          :<Profile />
         }
         <View style={styles.bottomTab}>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:1})}>
             <Icon name="md-restaurant" size={30} color={this.state.module==1?"#ff7200":"gray"} />
             <Text>Menu</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:2})}>
             <Icon name="cart" size={30} color={this.state.module==2?"#ff7200":"gray"} />
             <Text>Carrinho</Text>
             <Badge/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:3})}>
             <Icon name="md-map" size={30} color={this.state.module==3?"#ff7200":"gray"} />
             <Text>Loading</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:4})}>
             <Icon name="log-in" size={30} color={this.state.module==4?"#ff7200":"gray"} />
             <Text>Profile</Text>
           </TouchableOpacity>
         </View>
      </View>
    );
  }}

const styles = StyleSheet.create({
  bottomTab:{
    height:60,
    width:width,
    backgroundColor:'orange',
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
  },
  itemTab:{ 
    width:width/4,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  }
})
/*import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Food from "./Food";
import Cart from "./Cart";
import Address from "./Address";
import Profile from "./Profile";

import {Feather} from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator
        activeColor="#694f"
        barStyle={{ 
            backgroundColor: '#121212',
            paddingBottom:5,
            paddingTop:5
        
    }}
        
        >
        
            <Tab.Screen
                name="Food"
                component={Food}
                options={{
                                   
                    tabBarIcon: ({ color,size }) => (
                      <MaterialCommunityIcons name="Food" color={color} size={size} />
                    ),
                  }}
                />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                                   
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="Cart" color={color} size={size} />
                    ),
                  }}
             />
            
            <Tab.Screen
                name="Address"
                component={Address}
                options={{
                                   
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="Address" color={color} size={size} />
                    ),
                  }}
                
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                                   
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="Profile" color={color} size={size} />
                    ),
                  }}
                
            />
            
        </Tab.Navigator>
    )
}
*/