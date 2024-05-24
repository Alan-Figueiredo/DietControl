import { StyleSheet } from "react-native"


const styles = StyleSheet.create({

    containerPadrao: {
        flex:1,
        backgroundColor: "#F5F6FA",
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    containerLogo:{
        flex: 0.5,
        margin:"10%"
    },
    containerInput:{
        flex: 1,
        alignItems:"center"
        
    },
    input: {
        fontSize:20,
        height: 44,
        width:350,
        padding: 10,
        borderRadius: 42,
        marginBottom:20,
        backgroundColor: "#DDDDDD",
        color: "#818080",
        zIndex:-1
    },
    button: {   
        bottom:-30,       
    },
    buttonBack: {
        bottom:-50,    
    },
    icon:{
        position:"absolute",
        top:5,
        left:130
        
    }

})

export default styles;