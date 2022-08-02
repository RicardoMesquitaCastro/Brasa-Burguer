import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity, } from 'react-native';
//var { width } = Dimensions.get("window")
import { css } from '../constants/Css';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {

  constructor(props) {
     super(props);
     this.state = {
       id_facebook:null,
       picture:null,
       name:null,
       email:null,
       token:null
     };
  }

  render() {

    return(
      <ScrollView>
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.loginText}>Login</Text>
        
        <TextInput
          placeholder='Digite seu Email'
          placeholderTextColor='#fafafa'
          style={styles.input}
          autoCorrect={true}
          autoCapitalize={false}
          autoCompleteType='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Digite sua Senha'
          placeholderTextColor='#fafafa'
          style={styles.input}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity>
          <Text style={styles.fpText}>Esqueci a senha!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='google' type='font-awesome' size={30} color='#fafafa' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name='facebook-square'
              type='font-awesome'
              size={30}
              color='#fafafa'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='apple' type='font-awesome' size={30} color='#fafafa' />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: '#fffff' }]}>
              {' Cadastre-se'}
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
  );
  }
  

  _AuthFB()
  {
    const dhis = this
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(["public_profile","email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          dhis._setDataFB()
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  async _setDataFB()
  {
    // get token from facebook
    const tokenData = await AccessToken.getCurrentAccessToken().then(
      (data) => {
        return  data.accessToken.toString()
      }
    )
    // get data about profile from api graph
    const datajson = await this.apiGraphFace(tokenData)

    if (datajson.success) {
        console.log(datajson.data);
       // variable para enviar post
        const data_fb =  {
          id_facebook: datajson.data.id,
          email : datajson.data.email,
          name  : datajson.data.name,
          picture: datajson.data.picture
        }
        this.setState(data_fb);
    }
    else {
      console.log("Error get data");
    }
  }

  async apiGraphFace (token)  {

    const resface = await fetch('https://graph.facebook.com/v2.10/me?fields=id,name,email,picture.width(500)&access_token='+token)
   .then((response) => response.json())
   .then((json) => {
     const data = {
       data: json,
       success: true
     }
     return data ;
   })
   .catch((error) => {
     const data = {
       message: error,
       success: false
     }
     return data;
   })

   return resface;
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ff7200',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff7200',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fafafa',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#808e9b',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#ff7200',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#ff7200',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 20,
    fontWeight: '500',
  },
});
