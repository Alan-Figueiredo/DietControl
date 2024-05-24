import { View, StyleSheet,Text,Image ,ActivityIndicator} from "react-native";
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Loading(){

    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
          
          navigation.reset({
            index: 0,
            routes: [{ name: "TelaLogin" }],
          });
        }, 2000);
      
        return () => clearTimeout(timeout); 
      }, [navigation])

      return (
        <View style={styles.container}> 
            <Image source={require("../../Components/archives/LogoVertical.png")}></Image>
            <View style={styles.loadingContainer}>
                <View style={styles.loadingAjust}>
                    <ActivityIndicator
                    size="large"
                    color="#F5F6FA"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#3EC1C6",
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        flex:0.1,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    loadingAjust:{
        marginTop:"40%",
    },
});