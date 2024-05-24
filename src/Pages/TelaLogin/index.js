import React, { useState } from "react";
import { View,Text, TextInput,Image,TouchableOpacity } from "react-native";
import ButtonCustom from "../../Components/ButtonCustom/Button";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {Ionicons} from '@expo/vector-icons'


export default function TelaLogin(){

    const navigation = useNavigation();
    const [hideVisible,setHideVisible] = useState(true)

    return(

        <SafeAreaView style={styles.containerPadrao}>
            <View style={styles.containerImage}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerInput}> 
                <TextInput
                style={styles.input}
                placeholder="Login"
                />
                <TouchableOpacity onPress={() => setHideVisible(!hideVisible)}>
                    <Ionicons style={styles.icon} name="eye" color="#979899" size={35}/>
                </TouchableOpacity>
                <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={hideVisible}
                />
                
                
                
                <ButtonCustom
                text={"Acessar"}
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
