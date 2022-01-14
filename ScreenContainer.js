import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Screen1 from "./Screens/ProgramTask/Screen1";
import Screen2 from "./Screens/ProgramTask/Screen2";
import Screen3 from "./Screens/ProgramTask/Screen3";
import Screen4 from "./Screens/ProgramTask/Screen4";
import Screen5 from "./Screens/ProfileScreen.js/Screen5";
import Profile from "./Screens/ProfileScreen.js/profile";



const ScreenContainer = () => {
    return(

        <ScrollView style={{height : "100%"}}>
            {/* <Screen1 /> */}
            {/* <Screen2 /> */}
            {/* <Screen3 /> */}
            {/* <Screen4 /> */}
            {/* <Screen5 /> */}
            <Profile />
        </ScrollView>
    )
}
export default ScreenContainer;