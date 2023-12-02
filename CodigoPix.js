import { Text, SafeAreaView,TouchableOpacity, StyleSheet, Button, Image, Clipboard, ScrollView, Alert, View } from 'react-native';
import React, {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
 

let item = null ;

const App = ({ route, navigation}) => {
  const { vinho } = route.params;
        item = vinho
       navegar = navigation;

  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('00020126360014BR');
     Alert.alert('Copiado', 'Código Pix copiado com sucesso', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  };


  const Cabecalho = () =>(
      <View style = {styles.cabecalho}>
        
      </View>
      );

    const ExibirPagamento = () =>(
      <View>
        <View>
          <Text style={styles.cabecalhoText}>Pagamento</Text>
        </View>
        <View style={styles.view}>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.codigoGerado}>Código Gerado</Text>
            <View style={{alignItems:'center',marginTop:20}}>
              <Image style={styles.image1} source={require("./assets/Imagens/confirmar.png")} />
            </View>
            <Text style={styles.codigoView}>00020126360014BR</Text>
            <TouchableOpacity style={styles.botaoCopiar} onPress={() => copyToClipboard()}>
                <Text style={styles.textbotaoCopiar}>Copiar</Text>
            </TouchableOpacity>
            <Text style={styles.descricao}>Pix Copia e Cola</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-between',paddingHorizontal:20}}> 
          <Text style = {styles.textTotal}>Total </Text>
          <Text style = {styles.textValor}>{item.preco}</Text>
        </View>
      </View>
    )



return (
      <SafeAreaView style={styles.container}>
        <ExibirPagamento></ExibirPagamento>
      </SafeAreaView>
      
  )
}


const styles = StyleSheet.create({
  cabecalho:{
    color: '#210106',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    wordWrap: 'break-word',
    //top: -70,
  },

codigoView:{
    color: 'black',
    fontSize: 22,
    top: 25,
    fontFamily: 'Roboto',
    fontWeight: '400',
    wordWrap: 'break-word',
    textAlign: 'center',
    //backgroundColor: 'yellow'

},

view: {
   borderRadius: 20,
   backgroundColor: 'white',
   margin:20,
   shadowOffset:{
      width: 3,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    justifyContent:'center',
    //backgroundColor: 'blue'

 } ,
codigoGerado:{
    color: 'black',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '400',
    wordWrap: 'break-word',
    textAlign: 'center'
},  

image1:{
   color: 'black',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '400',
    wordWrap: 'break-word',
    //left: 125, 
    //top: 15,
    
  },

cabecalhoText:{
  color:'blck',
  textAlign: 'center',
  fontSize: 20,
  fontFamily: 'Comic Neue',
  fontWeight:  '700',
  //top: -20,
  
},

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F0E8',
    padding: 8,
  },

  textTotal:{
    color: '#8F041A',
    fontSize: 24,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    wordWrap: 'break-word',
    //top: 100, 
    //left: 20
  },

  textValor:{
    color: '#0E0002',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    fontWeight: '400',
    wordWrap: 'break-word',
    //top: 71, 
    //left: 230
  },


botao:{
   backgroundColor: "#630010",
    color: 'white',
    padding: 15, 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    width: '70%',
    marginTop: 90,
    textAlign: 'center',
    alignSelf: 'center',
},

prototipobotaoCopiar:{
    backgroundColor: "#630010",
    color: 'white',
    padding: 0, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    width: '70%',
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center',
},

botaoCopiar: {
        width: "70%",
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#630010',
        borderRadius: 10,
        alignSelf: 'center',
        top: 30,
    },
    textbotaoCopiar: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Arimo',
        fontWeight: '400',
        wordWrap: 'break-word'
    },

    descricao:{
      textAlign: 'center', 
      color: 'black', 
      top: 15,
      fontSize: 14, 
      fontFamily: 'Roboto', 
      fontWeight: '400', 
      wordWrap: 'break-word',
      borderRadius: 20,
      backgroundColor: 'white',
      margin:20,
      shadowOffset:{
          width: 3,
          height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
    }
    
});

export default App;