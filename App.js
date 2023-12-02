import { View, Text, SafeAreaView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrancoInicio from './Branco';
import TintoInicio from './Tinto';
import RoseInicio from './Rose';
import ListaVinho from './ListaVinho';
import Carrinho from './Carrinho';
import DetalhesVinho from './DetalhesVinho';
import Pagamento from './Pagamento';
import CodigoPix from './CodigoPix'

const Stack = createNativeStackNavigator();


const Tela = ({navigation}) => {
  return (
    <View >
      <View>
        <Text>Tela principal da Navegação</Text>
      </View>
      <View>
        <Button onPress={() => navigation.navigate("Tinto")} title="Ir para primeira tela" />
      </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tinto">
        <Stack.Screen name="Tela" component={Tela}  />
        <Stack.Screen name="Tinto" component={TintoInicio}  />
        <Stack.Screen name="Branco" component={BrancoInicio}  />
        <Stack.Screen name="Rose" component={RoseInicio}  />
        <Stack.Screen name="ListaVinho" component={ListaVinho} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="DetalhesVinho" component={DetalhesVinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="CodigoPix" component={CodigoPix} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



