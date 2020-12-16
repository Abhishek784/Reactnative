//import { StatusBar } from 'expo-status-bar';
 import React from 'react';
 import Providers from './navigation';
// import {useEffect} from "react";
// import { StyleSheet, Text, View, SafeAreaView,StatusBar, Image, TouchableWithoutFeedback, Button,Alert} from 'react-native';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';

// import OnboardingScreen from './screens/OnboardingScreen';
// import LoginScreen from './screens/LoginScreen';
// import { Value } from 'react-native-reanimated';

// const AppStack=createStackNavigator();

const App=()=>{
  return <Providers/>
}
// const App=()=>{ 

//   const[isFirstLaunch, setIsFirstLaunch]=React.useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(Value=>{
//       if(Value==null){
//         AsyncStorage.setItem('alreadyLaunched','true');
//         setIsFirstLaunch(true);
//       }else{
//         setIsFirstLaunch(false);
//       }
//     });
    
//   }, []);

//   if(isFirstLaunch==null){
//     return null;
//   }
//   else if(isFirstLaunch===true)
//   {
//     return(
//       <NavigationContainer>
//         <AppStack.Navigator headerMode="none">
//           <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
//           <AppStack.Screen name="Login" component={LoginScreen}/>
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   }
//   else{
//     return <LoginScreen/>
//   }

  
// }


 export default App;
// export default function App() {
//   //console.log("Appp execu");
//   // let x;
//   // x.toString();
//   const handle=()=>{
//     console.log("]\clicked");
//   }
//   return (
//     <SafeAreaView style={styles.container}>

//       <Text onPress={handle}>Hello react native</Text>

//       <TouchableWithoutFeedback onPress={handle}>
//         <Image 
//               source={require('./assets/favicon.png') }
//               blurRadius={1}
//               fadeDuration={1000}
//         />
//       </TouchableWithoutFeedback>

//       <Button 
//         color="orange"
//         title="click me" 
//         onPress={()=>{console.log("Button tapped")}}>
//       </Button>

//       <Button 
//         color="red"
//         title="click me" 
//         onPress={()=>{alert("Alert Button tapped")}}>
//       </Button>
      
//       <Button 
//         color="red"
//         title="click me" 
//         onPress={()=>{Alert.alert("custom alert box","hiiii", [
//           {text:"yes", onPress:()=>console.log("yes")},
//           {text:"NO", onPress:()=>console.log("no")}
//         ])}}>
//       </Button>


//       <StatusBar style="auto" />

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"pink",
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
//   },
// });
