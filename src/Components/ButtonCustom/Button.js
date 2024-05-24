import React, { useState } from "react";
import { View,TouchableOpacity,Text,TextInput  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";


export default function ButtonCustom({text, style,press, setText}){

    const navigation = useNavigation();
    const [isDialog,setIsDialog] = useState(false);

    function pressButton(){
        if (text === "Voltar" ){
            navigation.goBack();
        }
        if (text === "Digite o nome da dieta" ){
            setIsDialog(true);
        }
        if (text === "Acessar") {
            navigation.navigate("TelaInicial")
        }
        if (text === "Cadastrar") {
            press();
            navigation.goBack();
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
            press();
            navigation.goBack();
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

