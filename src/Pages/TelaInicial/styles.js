import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    containerPadrao: {
        flex:1,

    },
    containerLinha:{
        marginTop:0,
        backgroundColor:"#3EC1C6"
    },
    containerLogo: {
        flex: 0.4,
        margin:"10%"
    },
    containerIcon: {
        margin:"10%",
        marginTop:"30%",
        flexDirection:"row",
        justifyContent: "space-between",
    },
    containerButton1: {
        marginTop:"30%",
        alignItems:"center"

    },
    containerButton2: {
        margin:'5%',
        alignItems:"center"

    },
    buttonBack: {
        position:"absolute",
        bottom:15,
        alignSelf:'center',
    }

})

export default styles;