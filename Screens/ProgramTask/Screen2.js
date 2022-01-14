import React from "react";
import { View, Text, TouchableOpacity , StyleSheet , ImageBackground  , Image} from 'react-native';

const Screen2 = () => {
    return (
    
        <View style = {styles.container}>
        <View>
        <View style={styles.closeBtnView}>
            <TouchableOpacity style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>X</Text>
            </TouchableOpacity>
        </View>
        <View>
                <Text style={styles.HeaderText}>Set Alarm</Text>
        </View>
        <View>
                <Text style={styles.Text2}>Log Hot Flash and triggers helps You identify the triggers</Text>
        </View>
        </View>
        <ImageBackground source={require('../../Assets/checked2.png')} resizeMode="cover" style={styles.image} >
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        padding : 20,
        // justifyContent : "space-between",s
        alignItems : "center"
    },
    closeBtnView : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end"
    },
    closeBtn : {
        width : 40,
    },
    closeBtnText : {
        fontSize : 30,
        textAlign : "center"
    },
    HeaderText : {
        textAlign : "center",
        fontSize : 40,
        color : "#000"
    },
    Text2 : {
        fontSize : 25,
    },
    image: {
        display : "flex",
        flexDirection : "column",
        justifyContent: "center",
        alignItems : "center",
        width:200,
        height:200,
      },
   
})
export default Screen2