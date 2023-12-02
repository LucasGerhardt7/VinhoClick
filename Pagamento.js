import { Text, SafeAreaView, StyleSheet, Button, Image, ScrollView, View, Pressable } from 'react-native';
import CartaoCredito from "./assets/Imagens/CartaoCredito.png";


let navegar = null;
let item = null ;

const App = ({ route, navigation}) => {
   const { vinho } = route.params;
      item = vinho
       navegar = navigation;

    const Cabecalho = () =>(
      <View style = {styles.cabecalho}>
        
      </View>
      );

    const ExibirPagamento = () =>(
      <View >
        <View>
          <Text style={styles.cabecalhoText}>Escolha a forma de pagamento</Text>
        </View>
        <View style = {styles.centroImagem}>
          <Image  source={require("./assets/Imagens/CartaoCredito.png")} />
           <Pressable onPress={() => {navegar.navigate("CodigoPix", { vinho: item })}} title="Lista Vinho" >
          <Image  source={require("./assets/Imagens/Pix.png")} />
          </Pressable>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-between',paddingHorizontal:20}}> 
          <Text style = {styles.textTotal}>Total </Text>
          <Text style = {styles.textValor}>{item.preco}</Text>
        </View>
        <View style = {styles.botao}>
            <Button style = {styles.botao} title="Ir para Pagamento" color="#630010"/>
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
    fontWeight: '0',
    wordWrap: 'break-word',    
  },

centroImagem:{
  //top: 90,
   borderRadius: 20,
   margin:20,
   shadowOffset:{
    
      width: 3,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    alignItems:'center',
    //backgroundColor:'orange'
},
 
cabecalhoText:{
  marginTop: 10,
  //top: 70,
  color:'blck',
  textAlign: 'center',
  fontSize: 20,
  fontFamily: 'Comic Neue',
  fontWeight:  '700',
  //backgroundColor:'blue'

},

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F0E8',
    padding: 8,
    //backgroundColor:'blue'
  },

  textTotal:{
    color: '#8F041A',
    fontSize: 24,
    //textAlign: 'left',
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    wordWrap: 'break-word',
    //top: 80,
    //backgroundColor:'yellow'

    
  },

  textValor:{
    color: '#0E0002',
    //textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    wordWrap: 'break-word',
    //top: 50, 
    //left: 130,
    //backgroundColor:'gray'

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
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
    //backgroundColor:'pink'

}
});

export default App;