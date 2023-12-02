import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, Pressable, Image } from 'react-native';

let navegar = null;
const ListaVinho = ({navigation}) => {
  navegar = navigation;
const DATA = [
    {
      "id": 1009220,
      "name": "Vinho tinto seco bordô ",
      "SubTitulo": "Vinho Tinto Suave de Mesa",
      "marca": "San Martin",
      "description": "Aos vinhos San Martin, foi dado este nome, como forma de homenagear as nossas raízes. Este é o nome da capela, que fica exatamente na localização onde iniciou a trajetória de sucesso da nossa Família. A mesma capela continua por lá, desde 1960, no interior de Flores da Cunha. Produzido com uvas híbridas Americanas adquirida de mais de Mil famílias de agricultores da região da Serra Gaúcha, elaborado a partir da uva Bordô, o vinho exibe tons de vermelho violáceo, macio e levemente adocicado no paladar e em seu aroma revela frutas maduras.",
      "Ano":"2020",
      "Tamanho":"700ml",
      "Tipo":"Tinto",
      "Vinícola": "Panizzon",
      "Uvas": "Bordô",
      "pais": "Brasil",
      "Regiao": "Serra Gaúcha",
      "Safra":"",
      "alcool": "10,5%",
      "Harmonização": "Pratos leves, massas pouco condimentadas, frangos, peixes e sobremesas.",
      "Alérgenos": "Contém Sulfitos",
      "Aviso legal":"Proibida a venda para menores de 18 anos. Imagem ilustrativa, podem existir pequenas variações no rótulo de acordo com a safra e disponibilidade em estoque.",
      "preco":"17,99",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "https://cdn.vinhosvestcasa.com.br/wp-content/uploads/2023/03/Vinho-Tinto-Bordo-Suave-San-Martin-750ML.jpg",
        "extension": "jpg"
      }
    },
    {
      "id": 1010914,
      "name": "Vinho Rosé Suave",
      "subTitulo":"Vinho Rosé Suave de Mesa",
      "marca": "San Martin",
      "description": "Aos vinhos San Martin, foi dado este nome, como forma de homenagear as nossas raízes. Este é o nome da capela, que fica exatamente na localização onde iniciou a trajetória de sucesso da nossa Família. A mesma capela continua por lá, desde 1960, no interior de Flores da Cunha.",
      "smallDescriptin": "Um rosé delicado com uma bela cor salmão e agradável dulçor, muito fácil de beber",
      "Ano":"2023",
      "Tamanho":"700ml",
      "Tipo":"Rose",
      "Vinícola": "Panizzon",
      "Uvas": "Niágara Branca e Bordô",
      "pais": "Brasil",
      "Regiao": "Serra Gaúcha",
      "Safra":"",
      "alcool": "10,5%",
      "Harmonização": "Pratos leves como: aves e frutos do mar, com molho de ervas, risotos e queijos leves, massas com molho branco, grelhados e também com canapés.",
      "Alérgenos": "Contém Sulfitos",
      "Aviso legal":
      "Proibida a venda para menores de 18 anos. Imagem ilustrativa, podem existir pequenas variações no rótulo de acordo com a safra e disponibilidade em estoque.",
      "preco":"14,14",
      "modified": "2014-03-05T13:17:50-0500",
      "thumbnail": {
        "path": "https://cdn.vinhosvestcasa.com.br/wp-content/uploads/2023/03/Vinho-Rose-Suave-San-Martin-750ML.jpg",
        "extension": "jpg"
      }
    },
    
     {
      "id": 1017295,
      "name": "Vinho Branco Fino Seco",
      "marca": "Monte de Sabóia",
      "description": "",
      "Ano":"2019",
      "Tamanho":"700ml",
      "Tipo":"Branco",
      "Vinícola": "Monte da Ravasqueira",
      "Uvas": "Fernão Pires, Arinto e Sauvignon Blanc",
      "pais": "Portugal",
      "Regiao": "Lisboa",
      "Safra":"",
      "alcool": "13%",
      "Harmonização": "Risotos de frutos do mar, Pescados, Ceviches:",
      "Alérgenos": "Contém Sulfitos",
      "Aviso legal":
      "Proibida a venda para menores de 18 anos. Imagem ilustrativa, podem existir pequenas variações no rótulo de acordo com a safra e disponibilidade em estoque.",

      "preco":"42,72",
      "modified": "2013-09-18T11:15:29-0400",
      "thumbnail": {
        "path": "https://cdn.vinhosvestcasa.com.br/wp-content/uploads/2023/04/vinho-branco-portugues-regional-lisboa-monte-de-saboia-750ml.jpg",
        "extension": "jpg"
      }
    },
    {
      "id": 1017575,
      "name": "Vinho Tinto Carmenere",
      "marca": "Casas Patronales",
      "description": "A uva símbolo do Chile muito bem representada, Casa Patronales Gran Reserva Carmenere é um vinho marcante. Aromas de frutas negras, toques herbáceos e muita especiarias, em boca apresenta muito corpo, boa presença de baunilha, boa acidez e taninos elegantes. Com final persistente é perfeito para acompanhar refeições estruturadas.",
      "Ano":"2023",
      "Tamanho":"700ml",
      "Tipo":"Tinto",
      "Vinícola": "Casas Patronales",
      "Uvas": "Carmenere",
      "pais": "Chile",
      "Regiao": "Vale do Maule",
      "Safra":"",
      "alcool": "14,5%%",
      "Harmonização": "Carnes de caça, massas condimentadas",
      "Alérgenos": "Contém Sulfitos",
      "Aviso legal":
      "Proibida a venda para menores de 18 anos. Imagem ilustrativa, podem existir pequenas variações no rótulo de acordo com a safra e disponibilidade em estoque.",

      "preco":"89,90",
      "modified": "2014-11-17T17:46:57-0500",
      "thumbnail": {
        "path": "https://cdn.vinhosvestcasa.com.br/wp-content/uploads/2023/03/Vinho-Tinto-Carmenere-Gran-Reserva-Casas-Patronales-750ML-1.jpg",
        "extension": "jpg"
      }
    }
]

  const Vinho = ({ item, evento, link }) => (
      <View style={styles.vinho}>
        <Pressable onPress={() => {navegar.navigate("DetalhesVinho", { vinho: item })}} title="Ir para a Tela 2">
          <Image
              style={styles.tinyLogo}
              source={{uri:link}}
                
              
          />
          <Text style={styles.vinhoMarca}>{item.marca}</Text>
          <Text style={styles.vinhoTitle}>{item.name}</Text>
          <Text style={styles.vinhoPreco}>R${item.preco}</Text>
        </Pressable>
        {/*<Button onPress={() => Carrrinho()} title="Carrinho" />*/}
      </View>
  );

  const ExibirVinho = ({ item }) => (
      <Vinho
          item={item}
          link={item.thumbnail.path} />
  );
  
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={ExibirVinho}
            keyExtractor={item => item.id}
            numColumns={2}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F0E8',
    padding: 5,
  },
  vinho: {
    margin: 20,
    shadowOffset: {width: 2, height: 5},
    shadowColor: 'black',  
    shadowOpacity: 2,  
    shadowRadius: 3,  
    elevation:10,
    backgroundColor: '#F2F0E8',
    //backgroundColor: 'gray',
    borderRadius: 10,
    padding:10,
    minWidth: '40%', // Definindo uma largura máxima para os itens
    maxWidth:'40%',
    flexBasis:0
    
  },
  vinhoTitle:{
    textAlign:'left',
    fontWeight:'bold',
    fontFamily:'serif',
    fontSize:16
  },
  
  vinhoMarca: {
    marginVertical: 12,
    fontSize: 14,
    color: '#707070',
    fontWeight: 400,
    textAlign: 'left',
  },
   vinhoPreco:{
    textAlign:'left',
    color:'#8F041A',
    fontWeight:'bold',
    fontSize:20,
    marginTop:12

  },
  tinyLogo: {
    width: '100%',
    height: 150,
    alignSelf: 'center',
    resizeMode:'contain',
    backgroundColor:'white',
    
  },
});

export default ListaVinho;
