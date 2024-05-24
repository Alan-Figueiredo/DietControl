import react from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "./styles";


export default function Foods ({ data }){

    function edit(){
        alert("clicou")
    }
    return(
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={edit}
        >
            <View style={styles.containerList}>
                    <Text style={styles.containerText}> {data.nome} </Text>
            </View>
        </TouchableOpacity>
    )
}