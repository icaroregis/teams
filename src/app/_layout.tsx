import '@styles/global.css'
import { Slot } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <Slot />
      </SafeAreaView>
    </PaperProvider>
  )
}
