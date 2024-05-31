import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    containerPadrao: {
        flex:1,
    },
    containerLinha:{
        marginTop:0,
        backgroundColor:"#75aeb0"
    },
    containerLogo: {
        margin:"10%"
    },
    
    containerButton1: {

        position:"absolute",
        bottom:100,
        alignSelf:"center"

    },
    textNameDiet:{
        backgroundColor:"#3EC1C6",
        color: "#FFFFFF",
        width:300,
        textAlign:"center",
        fontSize:24,
        marginBottom:"5%",
        padding:10,
        borderRadius:10,

    },
    textNameDiet2:{
        backgroundColor:"#3EC1C6",
        color: "#FFFFFF",
        width:300,
        textAlign:"center",
        fontSize:24,
        marginBottom:"5%",
        padding:10,
        borderRadius:10,
        
    },
    buttonBack: {
        position:"absolute",
        bottom:15,
        alignSelf:'center',
    },
    dropdownStyle :{
        backgroundColor:"#3EC1C6",
        width:"90%",
        alignSelf:"center",
        top:"8%",
        color: "white",
        borderRadius:10,
        padding:10,
    }

})

export default styles;