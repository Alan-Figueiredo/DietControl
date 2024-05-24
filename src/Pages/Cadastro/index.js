import React, { useState } from "react";
import styles from "./styles";
import { View, TextInput,Image,TouchableOpacity } from "react-native";
import ButtonCustom from "../../Components/ButtonCustom/Button";
import {Ionicons} from '@expo/vector-icons'
import { addUser } from "../../services/requests";

export default function Cadastro(){

    const [hideVisible,setHideVisible] = useState(true);
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirme,setPasswordConfirme] = useState("");


    function loginUsers(){

        const data = {
            login,
            password
        }
        
        addUser(data)
    }

    return(

        <View style={styles.containerPadrao}> 
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerInput}> 
                <TextInput
                onChangeText={setLogin}
                style={styles.input}
                placeholder="Crie seu login"
                value={login}
                />

                <TouchableOpacity onPress={() => setHideVisible(!hideVisible)}>
                    <Ionicons style={styles.icon} name="eye" color="#979899" size={35}/>
                </TouchableOpacity>

                <TextInput
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Crie sua senha"
                secureTextEntry={hideVisible}
                value={password}
                />

                <TouchableOpacity onPress={() => setHideVisible(!hideVisible)}>
                    <Ionicons style={styles.icon} name="eye" color="#979899" size={35}/>
                </TouchableOpacity>
                <TextInput
                onChangeText={setPasswordConfirme}
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry={hideVisible}
                value={passwordConfirme}
                />
                <View style={styles.button}>
                    <ButtonCustom
                    text={"Cadastrar"}
                    press={loginUsers}
                    />
                </View>
                <View style={styles.buttonBack}>
                    <ButtonCustom
                    text={"Voltar"}
                    />
                </View>
            </View>
        </View>
    )
}

