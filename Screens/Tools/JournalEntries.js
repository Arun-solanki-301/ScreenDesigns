import React from "react";
import { StyleSheet, Text, View } from "react-native";

const JournalEntries = ()=>{
    return (
        <View style={styles.container}> 
                <View style={styles.JournalContainer}>
                <View style={styles.JournalTask}>
                    <Text style={styles.JournalTaskText1}>Daily Journal</Text>    
                    <Text style={styles.JournalTaskText2}>22/10/2021</Text>    
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.mainText1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>      
                </View>
                </View>


                <View style={styles.JournalContainer}>
                <View style={styles.JournalTask}>
                    <Text style={styles.JournalTaskText1}>Daily Journal</Text>    
                    <Text style={styles.JournalTaskText2}>22/10/2021</Text>    
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.mainText1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>      
                </View>
                </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 15,
        marginVertical : 15,
    },
    JournalContainer : {marginVertical : 15},
    JournalTask : {
        display : "flex",
        flexDirection : "row",
        backgroundColor : "#fff",
        justifyContent : "space-between",
        padding : 15,
        borderRadius : 10
    },
    JournalTaskText1 : {
        fontSize : 18,
        color  : "#000"
    },
    JournalTaskText2 : {
        fontSize : 18,
        
    },
    mainText : {
        backgroundColor : "#efefef",
        padding : 15,
        borderRadius : 10,
    }
})
export default JournalEntries;