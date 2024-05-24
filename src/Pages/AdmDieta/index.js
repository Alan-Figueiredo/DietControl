import {React, useState} from "react";
import { View,Text,Image, TextInput } from "react-native";
import {addTypeDiet} from '../../services/requests'
import ButtonCustom from '../../Components/ButtonCustom/Button'
import styles from "./styles";
import ListFoodsAdd from "./ListFoodsAdd";


export default function AdmDieta(){

    const [nomeDieta, setNomeDieta] = useState("Digite o nome da dieta")
    
    function POST_api(){

        const data = {
            nome : nomeDieta
        }
        addTypeDiet(data)
    }

    return(
       
        <View style={styles.containerPadrao}>
            
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>

            <View style={styles.containerLinha}>
                <Text/>
            </View>
            {/*  
            <View style={styles.containerButton3}>  
                <TextInput style={styles.inputNomeDieta}>Digite o nome da dieta</TextInput>
            </View>
            */}
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
