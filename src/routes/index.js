import Loading from '../Pages/Loading'
import TelaLogin from '../Pages/TelaLogin';
import Cadastro from '../Pages/Cadastro';
import TelaInicial from '../Pages/TelaInicial';
import AdmDieta from '../Pages/AdmDieta'
import AddEditAlimentos from '../Pages/AddEditAlimentos';
import ListFoodsAdd from '../Pages/AdmDieta/listFoods';
import GerenciarDieta from '../Pages/GerenciarDieta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Routes() {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaLogin' component={TelaLogin}/>       
        <Stack.Screen name='Cadastro' component={Cadastro}/>      
        <Stack.Screen name='TelaInicial' component={TelaInicial}/> 
        <Stack.Screen name='AdmDieta' component={AdmDieta}/> 
        <Stack.Screen name='AddEditAlimentos' component={AddEditAlimentos}/> 
        <Stack.Screen name='ListFoodsAdd' component={ListFoodsAdd}/> 
        <Stack.Screen name='GerenciarDieta' component={GerenciarDieta}/> 
    </Stack.Navigator>
    
  );
}
