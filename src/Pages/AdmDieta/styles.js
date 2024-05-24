import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    containerPadrao: {
        flex:1,

    },
    containerLinha:{
        backgroundColor:"#75aeb0"
    },
    containerNameDieta:{
        
        alignSelf: "center",
    },
    
    containerLogo: {
        margin:"10%"
    },
    containerButton: {
        position:"absolute",
        marginTop:"165%",
        alignSelf:"center",
        zIndex:-1,
        
    },
    containerButton2: {
        position:"absolute",
        bottom:90,
        alignSelf:"center",
        
    },
    containerButton3: {
        alignSelf:"center",
        margin:10,
        alignSelf:"center",
    },
    inputNomeDieta:{
        backgroundColor:"#3EC1C6",
        color: "#FFFFFF",
        width:500,
        padding:10,
        fontSize: 20,
        textAlign:"center",
    },
    buttonBack: {
        position:"absolute",
        bottom:15,
        alignSelf:'center',
    },
    containerList: {
        width:"90%",
        backgroundColor: "#3EC1C6",
        padding: 20,
        borderRadius: 10,
        alignSelf:"center",
        marginTop:30,
       
    },
    containerText: {
        fontSize:16,
        color:"#FFFFFF",
        
    },
    
    containerFlatList: {
        flex:0.6,
        
    },

})

export default styles;