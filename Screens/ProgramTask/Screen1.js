import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.closeBtnView}>
                    <TouchableOpacity style={styles.closeBtn}>
                        <Text style={styles.closeBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.HeaderText}>Log Hot Flash</Text>
                </View>
                <View>
                    <Text style={styles.Text2}>Log Hot Flash and triggers helps You identify the triggers</Text>
                </View>
                <View style={styles.ListContainer}>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.ListCheckBox}><Text></Text></TouchableOpacity>
                        <Text style={styles.listText}>Mild</Text>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.ListCheckBox}><Text></Text></TouchableOpacity>
                        <Text style={styles.listText}>Medium</Text>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.ListCheckBox}><Text></Text></TouchableOpacity>
                        <Text style={styles.listText}>Server</Text>
                    </View>
                </View>
            </View>

            <View>
            <TouchableOpacity style={styles.DoneBtn}>
                <Text style={styles.DoneBtnText}>Done</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding: 20,
        justifyContent : "space-between",
        alignItems: "center",
        height : 700,
      
        
    },
    closeBtnView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    closeBtn: {
        width: 40,
    },
    closeBtnText: {
        fontSize: 30,
        textAlign: "center"
    },
    HeaderText: {
        textAlign: "center",
        fontSize: 40,
        color: "#000"
    },
    Text2: {
        fontSize: 25
    },
    list: {
        backgroundColor: "#efefef",
        padding: 15,
        paddingVertical : 30,
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        borderRadius : 15,
        shadowColor : "#000",
        elevation: 8
    },
    ListCheckBox: {
        width: 25,
        height: 25,
        borderColor: "#000000aa",
        borderWidth: 1,
        borderRadius: 50
    },
    listText: {
        fontSize: 20,
        marginLeft: 15
    },
    ListContainer: {
        marginVertical: 25
    },
    DoneBtn: {
        backgroundColor: "#efefef",
        width: 150,
        paddingVertical: 10
    },
    DoneBtnText: {
        textAlign: "center",
        fontSize: 25
    },
})
export default Screen1