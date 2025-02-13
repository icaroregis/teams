import { Entypo } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, Text, View } from 'react-native'

export default function SecondaryHeader() {
  return (
    <View className="w-full flex-row items-center justify-between  gap-3 bg-additional-white px-[12px] py-[8px]">
      <View className="flex-row items-center gap-3 bg-additional-white">
        <Image
          source={require('@assets/images/menu.png')}
          className="w-[24px] h-[24px]"
        />

        <View className="flex-row items-center gap-2">
          <View className="flex justify-center items-center bg-blue-600 w-[20px] h-[20px] rounded-[6px]">
            <Image
              source={require('@assets/images/past.png')}
              className="w-[10px] h-[7px]"
            />
          </View>

          <Text className="text-gray-900 font-bold text-[18px]">
            VirtualProcess
          </Text>
        </View>
      </View>

      <View className="flex-row justify-center items-center gap-2">
        <View>
          <Entypo name="magnifying-glass" size={24} color="#2563eb" />
        </View>

        <View>
          <Ionicons name="notifications" size={24} color="#2563eb" />
        </View>

        <View>
          <Image
            source={require('@assets/images/content.png')}
            className="w-[27px] h-[27px]"
          />
        </View>
      </View>
    </View>
  )
}
