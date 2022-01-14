import React from "react";
import {View , Text , StyleSheet} from 'react-native'


const Screen5 = () => { 
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>subscribe to amika pro to access all programs</Text>

            
            <View style={styles.subscriptionContainer}>
            <View>
                <Text style={styles.text2}>Annual subscription 1 week free trail</Text>
                <Text style={styles.text3}> 600 $</Text>
            </View>
            <View>
                <Text style={styles.text2}>Annual subscription 1 week free trail</Text>
                <Text style={styles.text3}> 600 $</Text>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        display : "flex",
        justifyContent : "space-between",
        paddingHorizontal : 30,
        marginTop : 60,
        height : 500
    },
    text1 : {
        fontSize : 23
    },
    text2 : {
        fontSize : 23
    },
    text3 : {
        fontSize : 20
    },
    subscriptionContainer : {
    display : "flex",
    justifyContent : "space-between",
    height : 200
    } 
})

export default Screen5;