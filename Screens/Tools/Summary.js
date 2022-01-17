import React from "react";
import { View, Text  , StyleSheet, Image} from "react-native";

const Summary = () => {
    return (
        <View style= {styles.container}>

                <View style={styles.header}>
                    <Image source={require('../../Assets/Folder.png')} style={styles.headerImage}/>
                    <Text style={styles.headerText}>Key TakeAways</Text>
                </View>
                
                <View style={styles.list}>
                    <Image source={require('../../Assets/Folder.png')} style={styles.listImage}/>
                    <Text style={styles.listText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>

                <View style={styles.list}>
                    <Image source={require('../../Assets/Folder.png')} style={styles.listImage}/>
                    <Text style={styles.listText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 15
    },
    header : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around"
    },
    headerImage : {
        height : 100,
        width : 100
    },
    headerText : {
        fontSize : 40,
        width : 200,
        marginLeft : 20,
        color : "#000"

    },
    listImage : {
        height : 50 ,
        width : 50
    },
    list : {
        display :"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop : 20
    },
    listText : {
        width : "80%"
    }
})




export default Summary;