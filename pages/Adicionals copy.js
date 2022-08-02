import React, { Component,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { View,Text, Dimensions,Image,TextInput, ScrollView } from 'react-native';
import { css } from '../constants/Css';


var { width } = Dimensions.get("window")


export default function Adicionals(){

    const [isCebola, setCebola] = useState(false);
    const [isBacon, setBacon] = useState(false);
    const [isCreme, setCreme] = useState(false);
    const [isGeleia, setGeleia] = useState(false);
    const [isMolhob, setMolhob] = useState(false);
    const [isHamburguer, setHamburguer] = useState(false);
    const [isMolhop, setMolhop] = useState(false);
    const [isOvo, setOvo] = useState(false);
    const [isMolhoK, setMolhok] = useState(false);

   
    

    return(
      
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
       <View style={{height:10}} />
        <View style={{flex:1,alignItems: 'baseline', justifyContent: 'center',height:30}}>
          
        <Text style={{fontSize:38,color:"#ff7200"}}>Adicionais</Text>
        
        
        <View >
        
          <CheckBox 
             title="Cebola caramelizada                                            +4,00"
             checked={isCebola}
              checkedColor="#ff7200"
              onPress={() => setCebola(!isCebola)}
           />
          <CheckBox
             title="Bacon crocante                                                        +4,00"
             checked={isBacon}
             checkedColor="#ff7200"
             onPress={() => setBacon(!isBacon)}
          />
               <CheckBox
               title="Creme cheddar                                                          +3,00"
               checked={isCreme}
              checkedColor="#ff7200"
              onPress={() => setCreme(!isCreme)}
          />
          <CheckBox
                 title="Geleia de abacaxi com pimenta                           +3,00"
               checked={isGeleia}
               checkedColor="#ff7200"
               onPress={() => setGeleia(!isGeleia)}
          />
         <CheckBox
                title="Molho barbecue                                                          +1,00"
               checked={isMolhob}
               checkedColor="#ff7200"
               onPress={() => setMolhob(!isMolhob)}
         />
        <CheckBox
                 title="Hambúrguer bovino 180 gr                                     +8,00"
               checked={isHamburguer}
              checkedColor="#ff7200"
              onPress={() => setHamburguer(!isHamburguer)}
         />
        <CheckBox
                title="Molho picante                                                              +3,00"
               checked={isMolhop}
              checkedColor="#ff7200"
              onPress={() => setMolhop(!isMolhop)}
         />
        <CheckBox
                title="Ovo                                                                                    +2,00"
                checked={isOvo}
               checkedColor="#ff7200"
               onPress={() => setOvo(!isOvo)}
         />
        <CheckBox
                title="Molho ketchup                                                              +1,00"
                 checked={isMolhoK}
               checkedColor="#ff7200"
               onPress={() => setMolhok(!isMolhoK)}
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
        </View>
        </View>
        
        
                         
    );
}
