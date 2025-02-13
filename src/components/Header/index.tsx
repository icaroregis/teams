import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { cn } from 'utils/cn'

interface IHeaderProps {
  title: string
  secondaryTitle: string
  withIcon?: boolean
  isHome?: boolean
}

export default function Header({
  title,
  secondaryTitle,
  withIcon = false,
  isHome = false,
}: Readonly<IHeaderProps>) {
  const router = useRouter()

  function handlePress() {
    router.push('/home')
  }

  return (
    <View className="flex-col bg-blue-600 px-4 pt-6 h-[206px]">
      <View className="gap-2 mt-2">
        <View
          className={cn(
            'flex-row items-center gap-4',
            isHome ? 'justify-center' : 'justify-start',
          )}
        >
          {withIcon && (
            <View className="border border-solid border-gray-200 rounded-lg h-[36px] w-[36px] flex justify-center items-center">
              <TouchableOpacity onPress={handlePress}>
                <AntDesign name="arrowleft" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
          )}
          <Text className="font-extrabold text-[22px] text-additional-white text-center">
            {title}
          </Text>
        </View>

        <Text
          className={cn(
            'font-medium text-[14px] text-blue-50',
            isHome ? 'text-center' : 'text-left',
          )}
        >
          {secondaryTitle}
        </Text>
      </View>

      <View className="relative justify-center items-center rounded-[6px] mt-4">
        <Entypo
          className="absolute left-4 z-10 !text-gray-500"
          name="magnifying-glass"
          size={18}
        />
        <TextInput
          className="h-[50px] px-[42px] w-full text-[16px] bg-additional-white rounded-lg"
          placeholder="Pesquisar..."
          placeholderClassName="text-gray-500 text-[18px]"
        />
      </View>
    </View>
  )
}
