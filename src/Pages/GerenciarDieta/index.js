import React, {useState,useEffect} from 'react'
import { View,Text,Image} from "react-native";
import styles from "./styles";
import ButtonCustom from '../../Components/ButtonCustom/Button'
import ListFoodsAdd from "../AdmDieta/ListFoodsAdd";
import {GetTypeDiet} from '../../services/requests'

export default function GerenciarDieta(){

    const [nameDieta, setNameDieta] = useState("");

    useEffect(() => {
        async function fetchNameDieta() {
            const result = await GetTypeDiet();
            setNameDieta(result[3].nome);
        }

        fetchNameDieta();
    }, []);
    
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
            <View style={styles.containerButton1}>
                <Text style={styles.textNameDiet2}>Nome da dieta</Text>
                <Text style={styles.textNameDiet}>{nameDieta}</Text>
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
