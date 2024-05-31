import {React,useState,useContext} from "react";
import { View,Text, TextInput,Image,TouchableOpacity } from "react-native";
import ButtonCustom from "../../Components/ButtonCustom/Button";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {Ionicons} from '@expo/vector-icons'
import {loginUsers} from '../../services/requests'
import { objectUser } from "../Context/objectUser";


export default function TelaLogin(){

    const navigation = useNavigation();
    const [hideVisible,setHideVisible] = useState(true)
    const [login,setLogin] = useState("");
    const [senha,setSenha] = useState("");
    const [error,setError] = useState("")
    const {setObjUser} = useContext(objectUser)


    const loginUsuario = async () =>{
        const data = {
            login: login,
            senha: senha
        }
        
        const responseloginUsers = await loginUsers(data)
        

        if(responseloginUsers.message != "Usuário não encontrado") {
            if(responseloginUsers.login != login || responseloginUsers.senha != senha) {
                setError("Seu login ou senha estão incorretos.")
                setTimeout(()=>{
                    setError("")
                },2000)
                setLogin("")
                setSenha("")
                return false;
            }
            else {
                setError("Login realizado com sucesso!.")
                setTimeout(()=>{
                    setError("")
                },1500)
                setObjUser(responseloginUsers)
                setLogin("")
                setSenha("")
                return true;
            }
        } else {
                setError("Usuário não existe!")
                setTimeout(()=>{
                    setError("")
                },2000)
                setLogin("")
                setSenha("")
                return false;
        }
    }



    return(

        <SafeAreaView style={styles.containerPadrao}>
            <View style={styles.containerImage}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerInput}> 
                <TextInput
                style={styles.input}
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
                />
                <TouchableOpacity onPress={() => setHideVisible(!hideVisible)}>
                    <Ionicons style={styles.icon} name="eye" color="#979899" size={35}/>
                </TouchableOpacity>
                <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={hideVisible}
                value={senha}
                onChangeText={setSenha}
                />
                {error ? <Text style={{color: 'red',fontSize: 20,marginBottom:10}}>{error}</Text> : null}
                <ButtonCustom
                text={"Acessar"}
                press={loginUsuario}
                />
                <View style={[styles.containerText,{flexDirection:"row"}]}> 
                    <Text style={[{marginRight:5},styles.textStyle]}>
                        Não possui conta?
                    </Text>
                    <Text 
                        onPress={() => navigation.navigate('Cadastro')}
                        style={{color:"blue",fontSize:20}}>
                        Crie uma agora.
                    </Text>
                </View> 
            </View>
        </SafeAreaView>
        
    )
}
