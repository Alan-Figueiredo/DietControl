import React, {useState,useEffect, useContext} from 'react'
import { View,Text,Image} from "react-native";
import styles from "./styles";
import ButtonCustom from '../../Components/ButtonCustom/Button'
import ListFoodsAdd from "../AdmDieta/ListFoodsAdd";
import Dropdown from './dropdown';

export default function GerenciarDieta(){

    
    return(
       
        <View style={styles.containerPadrao}>
            
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerLinha}>
                <Text/>
            </View>
            
            <ListFoodsAdd/>
            
            <View style={styles.containerLinha}>
                <Text/>
            </View>
            <Dropdown/>
            <View style={styles.buttonBack}>
                    <ButtonCustom
                    style={{height:44,width:350}}
                    text={"Voltar"}
                    />
            </View>
            
        </View>
    )
}
