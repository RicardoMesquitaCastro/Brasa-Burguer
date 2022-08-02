import React, { Component,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { View,Text, Dimensions,Button } from 'react-native';
//import { useNavigation } from '@react-navigation/native';


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

    
    //const navigation = useNavigation();

    return(
      
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',height:30}}>
         
        <Text style={{fontSize:38,color:"#ff7200",textAlign:"center"}}>Adicionais</Text>
        <View >
                             
          <CheckBox 
          
             title="Cebola caramelizada"
             checked={isCebola}
              checkedColor="#ff7200"
              onPress={() => setCebola(!isCebola)}
           />
          <CheckBox
             title="Bacon crocante"
             checked={isBacon}
             checkedColor="#ff7200"
             onPress={() => setBacon(!isBacon)}
          />
               <CheckBox
               title="Creme cheddar"
               checked={isCreme}
              checkedColor="#ff7200"
              onPress={() => setCreme(!isCreme)}
          />
          <CheckBox
                 title="Geleia de abacaxi com pimenta"
               checked={isGeleia}
               checkedColor="#ff7200"
               onPress={() => setGeleia(!isGeleia)}
          />
         <CheckBox
                title="Molho barbecue"
               checked={isMolhob}
               checkedColor="#ff7200"
               onPress={() => setMolhob(!isMolhob)}
         />
        <CheckBox
                 title="Hambúrguer bovino 180 gr"
               checked={isHamburguer}
              checkedColor="#ff7200"
              onPress={() => setHamburguer(!isHamburguer)}
         />
        <CheckBox
                title="Molho picante"
               checked={isMolhop}
              checkedColor="#ff7200"
              onPress={() => setMolhop(!isMolhop)}
         />
        <CheckBox
                title="Ovo"
                checked={isOvo}
               checkedColor="#ff7200"
               onPress={() => setOvo(!isOvo)}
         />
        <CheckBox
                title="Molho ketchup"
                 checked={isMolhoK}
               checkedColor="#ff7200"
               onPress={() => setMolhok(!isMolhoK)}
        />
        
       
        </View>
        
        </View>
        
        
                         
    );
}