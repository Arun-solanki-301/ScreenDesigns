import React from "react";
import { View, Text, TouchableOpacity, StyleSheet , TextInput} from 'react-native';

const Screen3 = () => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.HeaderText}>Journal Questions</Text>
                </View>
                <View>
                    <Text style={styles.Text2}>Do you let know you are in menopause ? why or why not</Text>
                </View>
                <View>
                    <TextInput
                        multiline={true}
                        numberOfLines={8}
                        placeholder="Add your thoughts here"
                        style={styles.textArea}
                        />
                </View>
                <View style={styles.PostBtnView}>
            <TouchableOpacity style={styles.DoneBtn}>
                <Text style={styles.DoneBtnText}>Post to Community</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical : 20,
        paddingHorizontal : 20,
        justifyContent: "space-between",
        // alignItems: "center",
        // width :"100%"
    },
   
    HeaderText: {
        textAlign: "center",
        fontSize: 40,
        color: "#000",
        
    },
    Text2: {
        fontSize: 25,
    },
    list: {
        backgroundColor: "#efefef",
        padding: 15,
        display: "flex",
        flexDirection: "row",
        marginTop: 10

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
        width: 300,
        paddingVertical: 15,
        marginTop : 50,
        paddingHorizontal : 25
    },
    DoneBtnText: {
        textAlign: "center",
        fontSize: 25,
    },
    textArea : {
        backgroundColor : "#efefef",
        marginTop : 40,
        paddingHorizontal : 20,
        paddingVertical : 20,
        textAlignVertical: 'top',
        width : "100%"

    },
    PostBtnView : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center"
    }
})
export default Screen3