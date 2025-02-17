import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import '@styles/global.css'
import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1">
        <StatusBar barStyle="dark-content" />
        {fontsLoaded ? <Slot /> : <ActivityIndicator />}
      </SafeAreaView>
    </PaperProvider>
  )
}
