import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

let navegar = null;
function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.cabecalhoText}>VInhoClick</Text>
    </View>
  );
}

function Body() {
  return (
    <View style={styles.body}>
      <LinearGradient colors={['black', '#87A234', 'black']} style={styles.gradient}>
       
        <View> 

          <Text style={styles.bodyTextTitle}>Branco</Text>
          <Text style={styles.bodyText}>
            O vinho branco é pureza e frescura em uma taça, com sua cor radiante e aromas delicados que evocam frutas e flores. É uma celebração da simplicidade e da leveza.

          </Text>
        </View>
        <View style={styles.alignImg}>
         <Pressable onPress={() => {navegar.navigate("Rose")}} title="Ir para a Tela 2" >
          <Image
            style={styles.imgTinto}
            source={require('./assets/Imagens/branco-wallpaper.png')}
          />
          </Pressable>
        </View>
       
      </LinearGradient>
    </View>
  );
}



function Rodape() {
  return (
    <View style={styles.rodape}>
      <Pressable onPress={() => {navegar.navigate("ListaVinho")}} title="Lista Vinho" >
        <Image style={{resizeMode:'contain',height:'80%'}} source={require('./assets/icon/comprar-icon.png')}/>
      </Pressable>
      <Image style={{resizeMode:'contain',height:'80%'}} source={require('./assets/icon/curiosidades-icon.png')}/>
    </View>
  );
}
function BrancoInicio({navigation}) {
  navegar = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
      <Body/>
      <Rodape />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  cabecalho: {
    
    height: '15%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  cabecalhoText: {
    fontFamily:'fantasy',
    fontSize: 25,
    color: '#FFEAAF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  body: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    height: '75%',
  },

  rodape: {
    backgroundColor: 'black',
    height: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },

  gradient: {
    height: '105%',
    width: '100%',
    marginTop: 15,
    borderRadius: 5,
    colors: ['rgba(98, 0, 16, 0.98)', 'transparent'],
  },

  imgTinto:{
    height:'70%',
    width: '100%',
    resizeMode:'contain',
    //marginLeft:'10%',
    //backgroundColor:'blue'
    
  
  },
  alignImg:{
    
  },

  bodyText:{
    color: '#FFEAAF',
    fontFamily:'sans-serif',
    marginLeft:'10%',
    marginRight:'10%',
    marginBottom:'10%',
    lineHeight:20

  },

  bodyTextTitle:{
    color: '#FFEAAF',
    fontFamily:'cursive',
    fontWeight:'bold', 
    fontSize:30,
    marginLeft:'10%',
    marginRight:'10%',
    marginTop: '30%',
    marginBottom:'5%'
    
  }
});
export default BrancoInicio;