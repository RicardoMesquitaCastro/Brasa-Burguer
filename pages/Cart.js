import React, { Component} from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions,ScrollView,TextInput,FlatList} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';
import { css } from '../constants/Css';

var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

import Badge from '../components/badge/Badge';

export default class Cart extends Component {

  /*state = {
    checked: false,
  }*/

  constructor(props) {
    super(props);
    this.state = {
      dataCart:[],
      dataAdicionals:[],
      ids: [],
    };
 }
 
 //selecionar itens adicionais
 


 

 componentDidMount()
  {
    
   
    AsyncStorage.getItem('cart').then((cart)=>{
      const cartfood = JSON.parse(cart)
      if (cart !== null) {
        // We have data!!
         this.setState({dataCart:cartfood})
       
      }
      
     /* AsyncStorage.removeItem('cart').then((cart)=>{
        if (cart === false && cantd <=0) {
          //object removed
          this.setState({dataCart:cartfood})         
        }        
      }) */
   })
    
    .catch((err)=>{
      alert(err)
    })

    const url = "https://asunzlkemagjewlxkgoic6gl5q0excni.lambda-url.us-east-1.on.aws/"
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
         dataAdicionals:responseJson.adicionals,
         datacartadd:responseJson,
         
      });

    })
    .catch((error) =>{
      console.error(error);
    });
            
  }
    
  render() {
   
    
    return (

      <ScrollView>
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
         <View style={{height:10}} />
         <View style={{height:30}} />

         <View style={{flex:1}}>

           

             {
               this.state.dataCart.map((item)=>{
                 return(
                   <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                     <Image resizeMode={"cover"} style={{width:width/3,height:width/2}} source={{uri: item.food.image}} />
                     <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"center"}}>
                       <View>
                          <Text style={{fontWeight:"bold", fontSize:23}}>{item.food.name}</Text>
                         <Text style={{ fontSize:16}}>{item.food.description}</Text>
                         <Text style={{fontSize:23,color:"green", fontWeight:'bold'}}>R$ {item.price},00</Text>
                       </View>
                   </View>
                       
                   </View>
                   
                 )
               })
             }
             <View >
       
              <Text style={{fontSize:30,color:"#ff7200"}}> Adicionais</Text>
              
       
             <View  >
          
               <FlatList 
        
             data={this.state.dataAdicionals}
             renderItem={({ item }) => this.renderItemAds(item)}
           // keyExtractor={(item) => {return `${item.id}`;}}
         
           // keyExtractor = { (index) => index.toString() }
            />
      
             <Text style={{fontSize:18,color:"#ff7200",padding:10}}>  Observações </Text>        
              <TextInput
             style={css.input1}
              placeholder="Tem observações a fazer? Informe aqui"
             //  onChangeText={(text)=>setUser(text)}
               />
               
                 </View>
            {
               this.state.dataCart.map((item,i)=>{
                 
                 return(
                  <TouchableOpacity
                 // onPress={()=>this.onClickAddCart(item)} 
                   style={{
                    backgroundColor:"#ff7200",
                    //width:(width/2)+100,
                    height:100,
                    padding:10,
                    borderRadius:5,
                    margin:10,
                    justifyContent:'space-between',
                    
                    
                  }}>     
                    
                    <Text style={{fontSize:19,fontWeight:"bold",color:"white"}}>Carrinho de compras</Text>    
                           <Text  style={{fontWeight:'bold',color:"white",fontSize:20,}}>R${item.price*item.quantity},00</Text>
                           <View style={{flexDirection:'row-reverse', alignItems:'center',width:width-40}}>
                            
                          
                     <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                       <Icon name="ios-add-circle" size={38} color={"white"} />
                     </TouchableOpacity>
                     <Text style={{paddingHorizontal:5, fontWeight:'bold', fontSize:18,color:"white"}}>{item.quantity}</Text>   
                     
                     <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                       <Icon name="ios-remove-circle" size={38} color={"white"} />
                     </TouchableOpacity>
                     </View>
                   </TouchableOpacity>
                
              
               )
              })
            }
       
             </View>
             </View>
          </View>
      </ScrollView>
    );
  }

  /////////////////////////renderizando os adicionais//////////////////////
  renderItemAds = (item) => {
    
    return (
      <TouchableOpacity>
       <View style={css.row}>
        <Text style={{fontSize:15}}>{item.name}</Text>
         <CheckBox
            containerStyle ={{backgroundColor: 'white',borderColor:'white'}}
            title={<Text style={{fontSize:18,color:"#ff7200", fontWeight:'bold'}}> +{item.pricea},00</Text>}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.isChecked(item.id)}
            onPress={() => this.toggleChecked(item.id)}
             checkedColor="#ff7200"
               />
           
         </View>
      </TouchableOpacity>
    );
    
  }
 
  ////////////////////////////////////////////////////////////////////////botão selecionar quantidade

  onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    // const dataAd = this.state.dataAdicionals
    // let cantad = dataAd[a].pricea;

    if (type) {
     cantd = cantd + 1 
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
     
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
      this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }
  
  
  toggleChecked = (item) => {
    
    const ids = [...this.state.ids, item];
  
    if (this.isChecked(item)) {
      
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== item)
        });
      } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
  }
  isChecked = (item,) => {
    const isThere = this.state.ids.includes(item);
    return isThere;
  }
  





 ///////botão adicionar pedido
  onClickAdd(data){

    const itemcart = {
      adicionals: data.adicionals,
      id: data.id,
      pricea: data.pricea,
      
      
    }
  
    AsyncStorage.getItem('cart').then((datacartadd)=>{
        if (datacartadd !== null) {
          // We have data!!
          const cart = JSON.parse(datacartadd)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        
      
            //  this.setState({dataCart:cartfood})}
        else {
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Pedido adicionado")
      })
      .catch((err)=>{
        alert(err)
      })
  } 
  
 /* onClickAddCart(data){

    const itemcart = {
     // adicionals:data,
     // pricea:data,
      food: data,
      quantity: 1,
      price: data.price,
      
    }
 
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        
      
            //  this.setState({dataCart:cartfood})}
        else {
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Pedido adicionado")
      })
      .catch((err)=>{
        alert(err)
      })
  }  */

}
