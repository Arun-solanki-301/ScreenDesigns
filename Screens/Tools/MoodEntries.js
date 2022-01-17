import React from "react";
import { View, Text  , StyleSheet} from "react-native";

const MoodEntries = () => {
    return (
        <View style= {styles.container}>
            <View style={styles.ItemsList}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>12/10/2021</Text>
            </View>

            <View style={styles.ItemsList}>
                <Text style={styles.itemText1}>Angry</Text>
                <Text style={styles.itemText2}>12/10/2021</Text>
            </View>

            <View style={styles.ItemsList}>
                <Text style={styles.itemText1}>sad</Text>
                <Text style={styles.itemText2}>12/10/2021</Text>
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
        display : "flex",
        justifyContent : "space-between",
        flexDirection : "row",
        padding : 15
    },
    itemText1 : {
        fontSize : 20
    },
    itemText2 : {
        fontSize : 16
    }

})




export default MoodEntries;