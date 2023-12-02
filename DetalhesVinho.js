import { View, Text, SafeAreaView, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import {AsyncStorage} from 'react-native';

let navegar = null;
let item = null ;
function VinhoCard() {
  return (
    <View style={styles.card}>
     <Image
        style={styles.imgCard}
        source={{ uri: item.thumbnail.path }}
      /> 
      <View style={styles.infoCard}>
        <View style={{marginBottom:30}}>
          <Text style={{color:'#8F041A', fontFamily:'sans-serif',fontSize:15, fontWeight: 'bold'}}>Ano</Text>
          <Text style={{color:'black', fontFamily:'serif',fontSize:24, fontWeight: 'bold'}}>{item.Ano}</Text>
        </View>
        <View style={{marginBottom:30}}>
          <Text style={{color:'#8F041A', fontFamily:'sans-serif',fontSize:15, fontWeight: 'bold'}}>Tamonho</Text>
          <Text style={{color:'black', fontFamily:'serif',fontSize:24, fontWeight: 'bold'}}>{item.Tamanho}</Text>
        </View>
        <View>
          <Text style={{color:'#8F041A', fontFamily:'sans-serif',fontSize:15, fontWeight: 'bold'}}>Tipo</Text>
          <Text style={{color:'black', fontFamily:'serif',fontSize:24, fontWeight: 'bold'}}>{item.Tipo}</Text>
        </View>
      </View>
    </View>
  );
}


function InfoVinho() {
  return(
    <View style={styles.infoVinho}>
      <Text style={styles.marca}>{item.marca}</Text>
      <Text style={styles.nomeVinho}>{item.name}</Text>
      <Text style={styles.precoVinho}>R${item.preco}</Text>
      
    </View>
  );
}
function Details() {
  return(
      <View style={styles.details}>
        <View style={styles.campo1}>
          <Text style={styles.detailsLabel}>Região</Text>
          <Text style={styles.detailsValue}>{item.Regiao}</Text>
        </View>
        <View style={styles.campo2}>
          <Text style={styles.detailsLabel}>Uvas</Text>
          <Text style={styles.detailsValue}>{item.Uvas}</Text>
        </View>
        <View style={styles.campo3}>
          <Text style={styles.detailsLabel}>País</Text>
          <Text style={styles.detailsValue}>{item.pais}</Text>
        </View>
        <View style={styles.campo4}>
          <Text style={styles.detailsLabel}>Álcool</Text>
          <Text style={styles.detailsValue}>{item.alcool}</Text>
        </View>
      </View>
  );
}
function MaisDetalhes(){
  return(
    <View style={styles.maisDetalhes}>
      <Text style={{fontSize:25, fontFamily:'serif'}}>Mais Detalhes</Text>
    </View>
  );
}
export default function DetalhesVinho({ route, navigation}) {
  const { vinho } = route.params;
  item = vinho
  navegar = navigation;
  
  return (
    <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
      
          <VinhoCard/>
          <InfoVinho></InfoVinho>
          <Pressable onPress={() => {navegar.navigate("Carrinho", { vinho: item })}} title="Lista Vinho" >
            <Image source={require('./assets/Imagens/addCarrinhoButton.png')}/>
          </Pressable>
          <MaisDetalhes/>
          <Details/>
      
        </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    //backgroundColor:'blue',

  },
  container: {
    flex: 1,
    backgroundColor: '#F2F0E8',
    //backgroundColor: 'white',
    paddingTop:70,
    alignItems:'center',
    height:'100%'
  },
  
  card: {
    height: 300,
    width: '100%',
    paddingLeft:10,
    alignItems:'center',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent:'center'
    
  },
  imgCard: {
    resizeMode:'contain',
    height:'80%',
    width:'50%',
    //backgroundColor:'yellow',
    
  },
  infoCard: {
    //backgroundColor: 'red',
    width: '40%',
    justifyContent: 'space-around',
    paddingLeft:20
  },
  infoVinho:{
    height:130,
    width:'100%',
    //backgroundColor:'blue'
  },
  marca: {
    color: '#707070',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    fontWeight: '400',
    paddingLeft:20,
    wordWrap: 'break-word',
    marginTop:10
  },
  nomeVinho: {
    color: 'black',
    fontSize: 32,
    fontFamily: 'Abhaya Libre',
    fontWeight: '700',
    paddingLeft:20,
    wordWrap: 'break-word'
  },
  precoVinho: {
    color: '#8F041A',
    fontSize: 32,
    fontFamily: 'Abhaya Libre ExtraBold',
    fontWeight: '800',
    paddingLeft:20,
    wordWrap: 'break-word'
  },
  maisDetalhes:{
    backgroundColor:'#00000022',
    width:'100%',
    height:70,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  details:{
    width:'100%',
    //backgroundColor:'brown',
    padding:15,
  },
  detailsLabel:{
    color: '#8F041A',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    wordWrap: 'break-word',


  },
  detailsValue:{
    color: 'black',
    fontSize: 20,
    fontFamily: 'Comic Neue',
    fontWeight: '400',
    wordWrap: 'break-word',




  },
  
  campo1:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:15

  
  },
  campo2:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:15

  },
  campo3:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:15

  },
  campo4:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:15

  },
  
  /* detailsValue: {
    backgroundColor:'gray'
  } */
});
