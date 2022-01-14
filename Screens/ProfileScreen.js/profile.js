import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import { useThumbFollower } from "rn-range-slider/hooks";


const Profile = () => {
    return (
        <View style={styles.container}>


            <View>
            <View style={styles.profileImg}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../Assets/profile.jpg')}
                />
            </View>

            <View style={styles.profileBox}>
                <View style={styles.BoxItems}>
                    <Image
                        style={styles.profileBoxImg}
                        source={require('../../Assets/profile.jpg')}
                    />
                    <Text style={styles.profileBoxText}>2</Text>
                    <Text style={styles.profileBoxText2}>Task Completed</Text>
                </View>
                <View style={styles.BoxItems}>
                    <Image
                        style={styles.profileBoxImg}
                        source={require('../../Assets/profile.jpg')}
                    />
                    <Text style={styles.profileBoxText}>2</Text>
                    <Text style={styles.profileBoxText2}>break record</Text>
                </View>
                <View style={styles.BoxItems}>
                    <Image
                        style={styles.profileBoxImg}
                        source={require('../../Assets/profile.jpg')}
                    />
                    <Text style={styles.profileBoxText}>0</Text>
                    <Text style={styles.profileBoxText2}>all data</Text>
                </View>

            </View>



            <View style={styles.FormContainer}>

                <View style={styles.InputFieldBox}>
                <Text>Name</Text>
                <TextInput style={styles.InputField}/>
                </View>
                
                <View style={styles.InputFieldBox} >
                <Text>userName</Text>
                <TextInput style={styles.InputField} />
                </View>
                
                <View style={styles.InputFieldBox} >
                <Text>Password</Text>
                <TextInput style={styles.InputField} />
                </View>

            </View>

            </View>

                <View>
                <TouchableOpacity style={styles.LogOutBtn}><Text style={styles.LogOutBtnText}>Log out</Text></TouchableOpacity>
                </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "space-between",
        paddingHorizontal : 20,
        height : 700
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    profileImg: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    },
    profileBox : {
        display : "flex",
        flexDirection : "row",
        justifyContent  : "space-around",
        backgroundColor : "#efefef",
        padding : 15,
        borderWidth : 2,
        borderColor : "#cccccc",
        borderRadius : 10

    },
    profileBoxText : {
        textAlign : "center",
        fontSize : 25,
        color :"red"
    },
    profileBoxImg : {
        width : 50,
        height : 50
    },
    profileBoxText2 : {
        width : 75,
        textAlign : "center"
    },
    BoxItems : {
        display : "flex",
        alignItems : "center"
    },
    InputField : {
       borderBottomWidth : 2,
       borderColor : "#cccccc",
       fontSize : 18
    },
    InputFieldBox : {
        marginVertical : 10
    },
    LogOutBtnText : {
        textAlign : "center",
        fontSize : 18
    },
    LogOutBtn : {
        marginBottom : 20
    },
    FormContainer : {
        marginTop : 25
    }

})

export default Profile;