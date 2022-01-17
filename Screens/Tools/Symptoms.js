import React from "react";
import { View, Text  , StyleSheet} from "react-native";

const Symptoms = () => {
    return (
        <View style= {styles.container}>

            <View style={styles.ItemsList} >
                <Text style={styles.date}>12/11/2021</Text>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            </View>

            <View style={styles.ItemsList} >
                <Text style={styles.date}>12/11/2021</Text>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            </View>

            <View style={styles.ItemsList} >
                <Text style={styles.date}>12/11/2021</Text>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            <View style={styles.ListItems}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>3</Text>
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 15
    },
    ItemsList : {
        padding : 30,
    },
    ListItems : {
        display : "flex",
        justifyContent : "space-between",
        flexDirection : "row",
       
    },
    itemText1 : {
        fontSize : 20
    },
    itemText2 : {
        fontSize : 16
    },
    date : {
        fontSize : 18,
        marginBottom : 15
    }

})




export default Symptoms;