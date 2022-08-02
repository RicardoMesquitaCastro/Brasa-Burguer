import React, { Component } from 'react';
import { Text,
   Modal, 
   FlatList,
   Image,
   StyleSheet,
   Dimensions,
   View,
   ScrollView,
   TouchableOpacity,
   Button} from 'react-native';

import Cart from './Cart';
import Adicionals from './Adicionals';



var {height, width } = Dimensions.get('window');
console.disableYellowBox = true;

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage  from '@react-native-async-storage/async-storage';





export default class App extends Component {

 

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[],
      dataCategories:[],
      dataFood:[],
      selectCatg:1,
      modalVisible:false
      
    };
    
    
  }
  
///////////////////////////////////////Chama a API
  componentDidMount(){
    const url = "https://asunzlkemagjewlxkgoic6gl5q0excni.lambda-url.us-east-1.on.aws/"
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataBanner: responseJson.banner,
        dataCategories: responseJson.categories,
        datadescription: responseJson.description,
        dataFood:responseJson.food,
        dataAdicionals:responseJson.adicionals,
        datacart:responseJson
        
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onRequestClose(){
    //console.log("onRequestClose");
    this.setModalVisible(false);
  }
  
//////////////////////////////////////renderizando//////////////////////////////////////////////
  
  render() {
    
   
    return (
      <ScrollView>
     
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
          <View style={{width: width, alignItems:'center'}} >
              <Image style={{height:100,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/brasalogo.png")}  />
             
              <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}>
                {
                  this.state.dataBanner.map((itembann)=>{
                    return(  
                      <Image style={styles.imageBanner} resizeMode="cover" source={{uri:itembann}}/>
                    
                    )
                  })
                }
              </Swiper>
            </View>
            <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>
            <Text style={styles.titleCatg}>Categorias</Text>
            <FlatList style={{alignSelf:'center'}}
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({ item }) => this._renderItem(item)}
              keyExtractor = { (item,index) => index.toString() }
              
            />            
            
            <View>
            <FlatList
              data={this.state.dataFood}
              numColumns={2}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor = { (item,index) => index.toString() }>
 
            </FlatList>
            <Modal   //Modal que cha o Adicionals
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.onRequestClose(false)}>
            
            <Cart/>
            
            <Button color='#ff7200'
            borderRadius='5'
                
    title="Voltar"
    onPress={() => {
      this.setState({ modalVisible: false });
    }}
  />
            </Modal>
         </View>                     
        </View>
        </View>
        </ScrollView>
    );
  }

  
  ////////////////////////////para renderizar itens do cardapio////////////////////////////////////////////////////////

  _renderItemFood(item){
    
    let catg = this.state.selectCatg
    if(catg==0||catg==item.categorie)
    {
      return(
        <TouchableOpacity style={styles.divFood}>
          
          <Image
            style={styles.imageFood}
            resizeMode="cover"
            source={{uri:item.image}} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              {item.name}
            </Text>
            <Text>{item.description}</Text>
            <Text style={{fontSize:20,color:"green", fontWeight:'bold'}}>R$ {item.price},00</Text>
                                          
            <TouchableOpacity
        // onPress={() => this.setModalVisible()}
            onPress={()=>this.onClickAddCart(item)}
            style={{
              width:(width/2)-40,
              backgroundColor:'#ff7200',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:1
            }}>
              
               
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Adicionar</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
          </TouchableOpacity>
          
          
         
          
        )
        
    }
  }

/////////////////////////////////para renderizar categorias//////////////////////////////////////////////////////////////////////
_renderItem(item)
  {
    return(
      <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
      onPress={()=>this.setState({selectCatg:item.id})}>
        <Image
          style={{width:100,height:80}}
          resizeMode="contain"
          source={{uri : item.image}} />
        <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  
 
 
  

  //////////////////////////////botão que adiciona o hamburguer///////////////////////////////////////////////////////
  onClickAddCart(data){

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
  }  

}



/////////////////////////////////////CSS////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  imageBanner: {
    height:width/2,
    width:width-30,
    borderRadius:10,
    marginHorizontal:10
  }, 
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  }, 
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)-20)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  }
});



/*
<Button
      title="Back"
      onPress={() => {this.setModalVisible(true)}}
    />
    */
     