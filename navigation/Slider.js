import React, { useState } from 'react';
import {  Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides =[
  {
  key:'1',
  title: 'Brasa Costela',
  text:'O melhor Hamburguer Gourmet da cidade de Pires do Rio',
  image: {uri : 'https://dmkz2i5qfmsty.cloudfront.net/e29a04c4-29c2-4df3-ab25-2983cfc30d53.jpg'}  
  },
  {
    key:'2',
    title: 'Brasa Classic',
    text:'O melhor Hamburguer Gourmet da cidade de Pires do Rio',
    image: {uri : 'https://dmkz2i5qfmsty.cloudfront.net/3bb9238d-c903-465d-ae8a-6abbe9e91c65.jpg'}
    },
    {
      key:'3',
      title: 'Brasa Picante',
      text:'O melhor Hamburguer Gourmet da cidade de Pires do Rio',
      image: {uri : 'https://dmkz2i5qfmsty.cloudfront.net/e29a04c4-29c2-4df3-ab25-2983cfc30d53.jpg'},
    }
      
      
];

export default function App() {
  const [showHome,setShowHome] = useState(false);

  function renderSlides({item}){
    return(

      

      <View style={{flex:1}}>
        <Image
        source={item.image}
        style={{
          resizeMode:'cover',
          height:'70%',
          width:'100%'
          
          
          
        }}
        />
        <Text
        style={{
          paddingTop:25,
          paddingBottom:10,
          fontSize:23,
          fontWeight:'bold',
          color:'#009cff',
          textAlign:'center'
        }}>
          {item.title}
        </Text>

        <Text
        style={{
          textAlign: 'center',
          color:'#b5b5b5',
          paddingHorizontal:25,
          fontSize:15
        }}>
          {item.text}
        </Text>
        
      </View>

      

    )
  }


 if(showHome){
   return <Text>Entrou na Home</Text>
 } else{
   return(
    <AppIntroSlider
    renderItem={renderSlides}
    data={slides}
    activeDotStyle={{
      backgroundColor:'#009cff',
      width:30,      
     }}
     renderNextButton={()=><Text style={{color:'black', fontSize:25}}>Proximo</Text>}
     renderDoneButton={()=><Text style={{color:'black', fontSize:25}}>Acessar</Text>}
     onDone={()=> alert('Entrou no app')}// para quando for acessar a pagina desejada
   />
  );
 }
}

  
