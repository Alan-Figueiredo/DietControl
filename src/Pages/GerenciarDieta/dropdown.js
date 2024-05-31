import {Picker} from '@react-native-picker/picker';
import React, {useState, useContext,useEffect} from 'react';
import { View,Text } from 'react-native';
import {objectUser} from '../Context/objectUser'
import {GetTypeDiet} from '../../services/requests'
import styles from './styles';

export default function Dropdown(){

    const [selected, setSelected] = useState();
    const {objUser} = useContext(objectUser)
    const [array,setArray] = useState([]);

    const result = async () => {
        const response = await GetTypeDiet(objUser.id)
        response.forEach(element => {
            setArray(prevArray => [...prevArray, element.nome])
            
        });
    }
    
    useEffect(() => {
        result();
    }, []);
    
    
    
return(
    
    <View style={styles.dropdownStyle}>
        <Picker
        selectedValue={selected}
        onValueChange={(itemValue)=> setSelected(itemValue)
        }>
        <Picker.Item label="Selecione uma Dieta" value="" enabled={false}/>
        {array.map((item,i) => (
            <Picker.Item key={i} label={item} value={item}/>
        ))}
        </Picker>
    </View>
)
    

}