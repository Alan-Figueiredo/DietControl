import React from "react";
import { View,Text,Image} from "react-native";
import styles from "./styles";
import ButtonCustom from '../../Components/ButtonCustom/Button'


export default function TelaInicial(){

    return(
       
        <View style={styles.containerPadrao}>
            
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerLinha}>
                <Text/>
            </View>
            <View style={styles.containerIcon}>
                <Image source={require("../../Components/archives/lista-de-controle.png")}></Image>
                <Image source={require("../../Components/archives/dieta.png")}></Image>
            </View>
          
            <View style={styles.containerButton1}>
                <ButtonCustom
                style={{height:44,width:350}}
                text={"Gerenciar dieta"}
                />
            </View>
            
            <View style={styles.containerButton2}
            >
                <ButtonCustom
                style={{height:44,width:350}}
                text={"Criar"}
                />
            </View>

            <View style={styles.buttonBack}>
                    <ButtonCustom
                    style={{height:44,width:350}}
                    text={"Voltar"}
                    />
            </View>
            
        </View>
    )
}
