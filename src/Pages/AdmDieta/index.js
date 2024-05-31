import React, {useState,useContext} from "react";
import { View,Text,Image } from "react-native";
import {addTypeDiet} from '../../services/requests'
import ButtonCustom from '../../Components/ButtonCustom/Button'
import styles from "./styles";
import ListFoodsAdd from "./ListFoodsAdd";
import { objectUser } from "../Context/objectUser";


export default function AdmDieta(){

    const [nomeDieta, setNomeDieta] = useState("Digite o nome da dieta")
    const {objUser} = useContext(objectUser)

    
    function POST_api(){

        const dataTypeDiet = {
            nome : nomeDieta,
            id_users : objUser
        }

        addTypeDiet(dataTypeDiet)
        return true
    }

    return(
       
        <View style={styles.containerPadrao}>
            
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>

            <View style={styles.containerLinha}>
                <Text/>
            </View>
            <View style={styles.containerButton3}>  
                <ButtonCustom
                style={{height:40,width:250}}
                text={nomeDieta}
                setText={setNomeDieta}
                />
            </View>
            <ListFoodsAdd/>
            <View style={styles.containerLinha}>
                <Text/>
            </View>
            <View style={styles.containerButton}>  
                <ButtonCustom
                style={{height:44,width:350}}
                text={"Adicionar"}
                />
            </View>
            
            <View style={styles.containerButton2}>  
                <ButtonCustom
                style={{height:44,width:350}}
                text={"Salvar"}
                press={POST_api}
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
