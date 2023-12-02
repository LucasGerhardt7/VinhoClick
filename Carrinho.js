import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { CheckBox } from '@rneui/themed';

let navegar = null;
let item = null ;
let preco = null;
function Cabecalho({route}){

  return(
    <View style={styles.cabecalhoContainer}>
      <Text style={styles.textCabecalho}>Carrinho de Compras</Text>
    </View>
  );
}
function ItemDoCarrinho({route}) {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.itemOptions}>
        
        <CheckBox
           checked={false}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
        <Image
          style={{resizeMode:'contain'}}
          source={require('./assets/Imagens/lixeira_icon.png')}
        />
      </View>
      <View style={styles.itemCard}>      
        <Image
          style={styles.imgItem}
          source={{ uri: item.thumbnail.path }}
        />

        <View style={styles.infoItem}>
          <View style={styles.infoItemLinha1}>
            <Text style={styles.infoItem_marca}>{item.marca}</Text>
            
            <Text style={{right:-100}}>1</Text>
          </View>
          <Text style={styles.infoItem_nome}>{item.name}</Text>
          <Text style={styles.infoItem_preco}>{item.preco}</Text>
        </View>
      </View>
    </View>
  );
}

function Resumo() {
  return (
    <View style={styles.resumoContainer}>
      <View style={styles.resumoTitle}>
        <Text style={{ fontSize: 25, fontFamily: 'serif' }}>Resumo</Text>
      </View>
      <View style={{position:'relative',height:30}}> 
        <Text style={styles.resumoTotal}>TOTAL</Text>
        <Text style={styles.resumoTotal_value}>{item.preco}</Text>
      </View>
    </View>
  );
}
export default function Carrinho( { route, navigation} ) { //Vinho Selecionado

const { vinho } = route.params;
item = vinho
navegar = navigation;
//alert(JSON.stringify(vinho));
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho/>
      <ItemDoCarrinho />
      <Resumo/>
      <Pressable onPress={() => {navegar.navigate("Pagamento", { vinho: item })}} title="Lista Vinho">
      <Image style={{marginVertical:10}}source={require('./assets/Imagens/irParaPagamentoButton.png')} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F2F0E8',
    //paddingTop: 70,
    alignItems: 'center',
  },
  cabecalhoContainer:{
    //backgroundColor:'gray',
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  textCabecalho:{
    fontSize:20,
    fontWeight:500
  },
  flexContainer: {
    //flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '60%',
    //marginBottom: 10,
    //backgroundColor: 'pink',
    
    
  },
  itemOptions: {
    backgroundColor: 'white',
    height: 120,
    width:'20%',
    padding: 10,
    justifyContent: 'space-around',
    alignItems:'center'
    
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '75%',
    height: 120,
    borderTopRightRadius:15,
    
    
  },
  imgItem: {
    resizeMode: 'center',
    //backgroundColor: 'gray',
    height: '100%',
    width: 55,
    marginLeft:10
  },
  
  infoItemLinha1:{
    flexDirection:'row',

  },
  infoItem_marca:{
    color: '#707070',
    fontSize: 15,
    fontFamily: 'sans-serif',
    fontWeight: '400'
  },
  infoItem_nome:{
    color: 'black',
    fontSize:17,
    fontFamily: 'serif',
    fontWeight: 'bold',
    wordWrap: 'break-word'
  },
  infoItem_preco:{
    color: '#8F041A',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    wordWrap: 'break-word'
  },
  infoItem:{
    flexDirection:'column',
    justifyContent:'space-around',
    padding:10
  },
  resumoContainer:{
    justifyContent:'flex-start',
    //backgroundColor:'orange',
    width:'100%',
    
  },
  resumoTitle:{
    backgroundColor:'#00000015',
    width:'100%',
    height:70,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:20,
    
  },
  resumoTotal:{
    position:'absolute',
    top:1,
    left:22,
    color: '#8F041A',
    fontSize: 24,
    fontWeight:'bold'
  },
  resumoTotal_value:{
    position:'absolute',
    top:1,
    right:22,
    color: '#0E0002',
    fontSize: 20,
    fontWeight:'bold'
  }
});
