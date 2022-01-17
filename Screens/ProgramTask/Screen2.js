import React from "react";
import { View, Text, TouchableOpacity , StyleSheet , ImageBackground  , Image , Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Screen2 = () => {
    return (
    
        <View style = {styles.container}>
        <View style = {{zIndex : 999}}>
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
        <View style={styles.BackgroundImage}>
        <ImageBackground source={require('../../Assets/checked2.png')} style={styles.image} >
        </ImageBackground>
        </View>
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
       
        height : 150,
        width : 150,
        resizeMode :"cover"
      },
      BackgroundImage : {
          flex : 1,
      }
   
})
export default Screen2