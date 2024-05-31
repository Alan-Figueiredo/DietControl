import React, { useState } from "react";
import { View,TouchableOpacity,Text,TextInput  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";


export default function ButtonCustom({text, style,press, setText}){

    const navigation = useNavigation();
    const [isDialog,setIsDialog] = useState(false);

    async function pressButton(){
        
        if (text === "Voltar" ){
            navigation.goBack();
        }
        if (text === "Digite o nome da dieta" ){
            setIsDialog(true);
        }
        if (text === "Acessar") {
            if (text === "Acessar") {
                const loginSuccessful = await press();
                if (loginSuccessful) {
                    setTimeout(() => {
                        navigation.navigate("TelaInicial")
                    }, 1500); 
                } 
            }
        }
        if (text === "Cadastrar") {
            if(press() === true) {
                setTimeout(() => {
                    navigation.navigate("TelaLogin")
                }, 1000); 
            }
        }
        if (text === "Criar") {
            navigation.navigate('AdmDieta')
        }
        if (text === "Adicionar"){
            navigation.navigate('AddEditAlimentos')
        }
        if (text === "Gerenciar dieta") {
            navigation.navigate("GerenciarDieta")
        }
        if (text === "Salvar" && press ) {
            if(press() === true) {
                setTimeout(() => {
                    navigation.goBack();
                }, 500); 
            }
            
        }
        else if (text === "Salvar" ){
            navigation.navigate("TelaInicial");

        }
        
        
    }

    function handleOk() {
        setIsDialog(false);
        setText(text);
    }

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={pressButton}>
                <View style={[styles.buttonStyle, { ...style }]}>
                    <Text style={[{ color: "#FFFFFF" }, { fontSize: 20 }]}>{text}</Text>
                </View>
            </TouchableOpacity>
            {isDialog && (
                <View>
                    <TextInput
                        style={styles.inputNomeDieta}
                        onChangeText={setText}
                        
                    />
                    <TouchableOpacity onPress={handleOk}>
                        <Text>OK</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

}

