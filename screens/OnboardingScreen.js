import React from 'react';
import {View, Text,Button,TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const skip=({...props})=>(
    <Button
        title='skip'
        color="#000000"
        {...props}
    />
)
const next=({...props})=>(
    <Button
        title='next'
        color="#000000"
        {...props}
    />
)
const done=({...props})=>(
    <TouchableOpacity style={{marginHorizontal:10}} {...props}>
    <Text>Done</Text>
</TouchableOpacity>
)
const OnboardingScreen=({navigation})=>{
    return (
        <Onboarding
            SkipButtonComponent={skip}
            NextButtonComponent={next} 
            DoneButtonComponent={done} 
            onSkip={()=>navigation.replace("Login")}
            onDone={()=>navigation.navigate("Login")}
            pages={
                [
                   {
                        backgroundColor: '#a6e4d0',
                        image: <Image source={require('../assets/favicon.png')
                                        } />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    }, 
                    {
                       backgroundColor:'#fdeb93',
                        image:<Image source={require('../assets/favicon.png')} />,
                        title: "Onboarding 2",
                        subtitle: "Done with react-native onboarding swiper...okk"
                    },


                ]
            }
        />
    );
};

export default OnboardingScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});