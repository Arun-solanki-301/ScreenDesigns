import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Screen1 from "./Screens/ProgramTask/Screen1";
import Screen2 from "./Screens/ProgramTask/Screen2";
import Screen3 from "./Screens/ProgramTask/Screen3";
import Screen4 from "./Screens/ProgramTask/Screen4";
import Screen5 from "./Screens/ProfileScreen.js/Screen5";
import Profile from "./Screens/ProfileScreen.js/profile";
import JournalEntries from "./Screens/Tools/JournalEntries";
import MoodEntries from "./Screens/Tools/MoodEntries";
import Symptoms from "./Screens/Tools/Symptoms";
import Summary from "./Screens/Tools/Summary";



const ScreenContainer = () => {
    return(

        <ScrollView style={{height : "100%" , backgroundColor : "#f5f5f5"}}>
            {/* <Screen1 /> */}
            {/* <Screen2 /> */}
            {/* <Screen3 /> */}
            {/* <Screen4 /> */}
            {/* <Screen5 /> */}
            {/* <Profile /> */}
            {/* <JournalEntries /> */}
            {/* <MoodEntries /> */}
            {/* <Symptoms /> */}
            <Summary />
        
        
        
        </ScrollView>
    )
}
export default ScreenContainer;