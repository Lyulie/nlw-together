import React from "react";
import { useFonts } from "expo-font"
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani"

import AppLoading from "expo-app-loading";

import { SignIn } from "./src/screens/SignIn";
import { Home } from "./src/screens/Home";
import { Avatar } from "./src/components/Avatar";

import { Routes } from "./src/routes";

import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";


export default function App() {
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return(
    <Background>
      <StatusBar 
          barStyle = "light-content"
          backgroundColor = 'transparent'
          translucent
      />
      <Routes />
    
    </Background>
  )
}