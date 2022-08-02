import React, { Component,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { View,Text, Dimensions,Image,TextInput, ScrollView } from 'react-native';
import { css } from '../constants/Css';

var { width } = Dimensions.get("window")


export default class Adicionals extends Component{
  
    state = {
      checked: false,
    }
      
      
  render()  {
    const { setCebola } = this.state;
    const { setBacon } = this.state;
    const { setCreme} = this.state;
    const { setGeleia } = this.state;
    const { setMolhob} = this.state;
    const { setHamburguer } = this.state;
    const { setMolhop} = this.state;
    const { setOvo} = this.state;
    const { setMolhok} = this.state;
    
    return(
     
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
      
      <Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
       <View style={{height:10}} />
        <View style={{flex:1,alignItems: 'baseline', justifyContent: 'center',height:30}}>
       
        <Text style={{fontSize:30,color:"#ff7200"}}>Adicionais</Text>
        
        <ScrollView>
        <View >
        
          <CheckBox 
             title="Cebola caramelizada                                            +4,00"
             checked={setCebola } 
             onPress={() => { this.setState({ setCebola : !setCebola  }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
             title="Bacon crocante                                                        +4,00"
             checked={setBacon } 
             onPress={() => { this.setState({ setBacon : !setBacon }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
               title="Creme cheddar                                                          +3,00"
               checked={setCreme } 
             onPress={() => { this.setState({ setCreme : !setCreme }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                 title="Geleia de abacaxi com pimenta                           +3,00"
                 checked={setGeleia  } 
             onPress={() => { this.setState({ setGeleia  : !setGeleia  }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                title="Molho barbecue                                                          +1,00"
                checked={setMolhob  } 
             onPress={() => { this.setState({ setMolhob  : !setMolhob  }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                 title="Hambúrguer bovino 180 gr                                     +8,00"
                 checked={setHamburguer } 
             onPress={() => { this.setState({ setHamburguer : !setHamburguer }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                title="Molho picante                                                              +3,00"
                checked={setMolhop } 
             onPress={() => { this.setState({ setMolhop : !setMolhop }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                title="Ovo                                                                                    +2,00"
                checked={setOvo } 
             onPress={() => { this.setState({ setOvo : !setOvo }); }}
              checkedColor="#ff7200"              
           />
           <CheckBox 
                title="Molho ketchup                                                              +1,00"
                checked={setMolhok } 
             onPress={() => { this.setState({ setMolhok : !setMolhok }); }}
              checkedColor="#ff7200"              
           />
         
        
         <View  >
        <Text style={{fontSize:18,color:"#ff7200",padding:8}}>  Observações </Text>        
        <TextInput
           style={css.input1}
           placeholder="Tem observações a fazer? Informe aqui"
           onChangeText={(text)=>setUser(text)}
          />
          </View>
       
          
        </View>
        </ScrollView>
        </View>
        
        </View>
       
        
                         
    );
  }
}
