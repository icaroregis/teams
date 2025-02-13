import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type CardsDataProps = {
  title: string
  value: number
}

interface CardsProps {
  data: CardsDataProps[]
}

export default function Cards(props: Readonly<CardsProps>) {
  const router = useRouter()

  function handlePress() {
    router.push('/documents')
  }

  return (
    <View className="flex flex-row justify-between flex-wrap z-20 px-4 mt-[-30px]">
      {props.data.map((item, index) => (
        <TouchableOpacity key={index} onPress={handlePress}>
          <View className="flex flex-row w-[180px] items-center gap-4 p-2 bg-additional-white rounded-xl mb-4">
            <View className="grid justify-center items-center rounded-[12px] h-[48px] w-[48px] bg-blue-50">
              <AntDesign name="copy1" size={24} color="#2563eb" />
            </View>
            <View className="grid gap-1">
              <Text className="text-[14px] text-gray-500">{item.title}</Text>
              <Text className="text-[20px] font-extrabold text-gray-900">
                {item.value.toLocaleString()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
