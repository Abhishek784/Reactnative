import React from 'react';
import {useEffect,useState} from "react";
import { StyleSheet, Text, View, SafeAreaView,StatusBar, Image, TouchableWithoutFeedback, Button,Alert} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import { Value } from 'react-native-reanimated';

const Stack=createStackNavigator();

const AuthStack=()=>{ 

  const[isFirstLaunch, setIsFirstLaunch]=React.useState(null);
    let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(Value=>{
      if(Value==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    });
    
  }, []);

  if(isFirstLaunch==null){
    return null;
  }
  else if(isFirstLaunch===true)
  {
    // return(
    //   <NavigationContainer>
    //     <AppStack.Navigator headerMode="none">
    //       <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
    //       <AppStack.Screen name="Login" component={LoginScreen}/>
    //     </AppStack.Navigator>
    //   </NavigationContainer>
    // );
    routeName="Onboarding";
  }
  else{
    //return <LoginScreen/>
    routeName='Login'
  }

  return(
    <Stack.Navigator initialRouteName={routeName}>
     
        <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen}
            options={{header:()=>null}}
            />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{header:()=>null}}
            />
        {/* <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{header:()=>null}}
            /> */}
        
    </Stack.Navigator>
  );
  
}


export default AuthStack;