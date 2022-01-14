import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Slider from 'rn-range-slider';

const Screen4 = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.closeBtnView}>
                    <TouchableOpacity style={styles.closeBtn}>
                        <Text style={styles.closeBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.HeaderText}>Hot Flash trigger</Text>
                </View>
                <View>
                    <Text style={styles.Text2}>Log Hot Flash and triggers helps You identify the triggers</Text>
                </View>
                <View style={styles.ListContainer}>
                    <View style={styles.list}>
                        <Text style={styles.listText}>Mild</Text>
                        <Text style={styles.listText2}>1</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>Medium</Text>
                        <Text style={styles.listText2}>2</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>Server</Text>
                        <Text style={styles.listText2}>3</Text>
                    </View>
                </View>
            </View>
            {/* <Slider
                style={{ width: 160, height: 80 }}
                gravity={'center'}
                min={200}
                max={1000}
                step={20}
                selectionColor="#3df"
                blankColor="#f618"
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        borderRadius: 15
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
    listText2: {
        fontSize: 20,
        marginRight: 15
    },
    ListContainer: {
        marginVertical: 25,
    },

})
export default Screen4