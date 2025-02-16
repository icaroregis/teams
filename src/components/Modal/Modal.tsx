import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { Modal as RNModal, TouchableOpacity, View } from 'react-native'

type ModalProps = {
  isVisible: boolean
  toggleOverlay: () => void
  children: React.ReactNode
  className?: string
}

export default function Modal({
  isVisible = false,
  toggleOverlay,
  children,
  className,
}: Readonly<ModalProps>) {
  return (
    <RNModal
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleOverlay}
    >
      <View className="flex-1 justify-center items-center bg-black/60">
        <View
          className={`relative bg-additional-white rounded-xl ${className}`}
        >
          <TouchableOpacity
            onPress={toggleOverlay}
            className="absolute top-4 right-4"
          >
            <AntDesign name="close" size={24} color="#6b7280" />
          </TouchableOpacity>
          <View className="p-5">{children}</View>
        </View>
      </View>
    </RNModal>
  )
}
