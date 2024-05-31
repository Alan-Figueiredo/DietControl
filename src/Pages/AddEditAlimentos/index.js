import {React,useState,useContext} from "react";
import styles from "./styles";
import { View, TextInput,Image,Text  } from "react-native";
import ButtonCustom from "../../Components/ButtonCustom/Button";
import {AddFoods} from "../../services/requests";
import { UpdateContext } from "../Context/index";
import { objectUser} from '../Context/objectUser'

export default function AddEditAlimentos(){

    const { setUpdateKey } = useContext(UpdateContext);
    const { objUser } = useContext(objectUser);
    const [nome, setNameAlimento] = useState("");
    const [qntProteina, setQntProteina] = useState("");
    const [valor, setValor] = useState("");
    const [error,setError] = useState("");

    function logview(){
        if(nome === "" || qntProteina === "") {
            setError("Voce não pode deixar os campos * em branco.")
            setTimeout(()=>{
                setError("")
            },2000)
            return false
            
        } else {
            const data = {
                nome,
                qntProteina,
                valor,
                objUser
            }
            AddFoods(data)
            setUpdateKey(prevKey => prevKey + 1);
            return true
        }
        
    }

    return(

        <View style={styles.containerPadrao}> 
            <View style={styles.containerLogo}>
                <Image source={require("../../Components/archives/LogoHorizontalgreenOriginal.png")}></Image>
            </View>
            <View style={styles.containerInput}>
                <TextInput
                onChangeText={setNameAlimento}
                value={nome}
                style={styles.input}
                placeholder="Nome do alimento *"
                />
                <TextInput
                onChangeText={setQntProteina}
                value={qntProteina}
                keyboardType="numeric"
                style={styles.input}
                placeholder="Quantidade de proteina *"
                />
                <TextInput
                onChangeText={setValor}
                value={valor}
                keyboardType="numeric"
                style={styles.input}
                placeholder="valor"
                />
                {error ? <Text style={{color: 'red',fontSize: 20}}>{error}</Text> : null}
                <View style={styles.button}>
                    <ButtonCustom
                    press={logview}
                    text={"Salvar"}
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

