import PieChart from '@components/Charts/PieChats'
import { Text, View } from 'react-native'

interface ContainerPieChartsProps {
  data: any[]
  colors: string[]
  total: number
  title: string
  subTitle: string
}

export default function ContainerPieCharts({
  data,
  colors,
  total,
  title,
  subTitle,
}: Readonly<ContainerPieChartsProps>) {
  return (
    <View className="bg-additional-white rounded-[16px] px-[35px] py-[24px]">
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-[16px] font-extrabold">{title}</Text>
          <Text className="text-[16px] font-extrabold">{subTitle}</Text>
        </View>

        <View className="flex flex-1 justify-center items-center rounded-[12px] h-[48px] w-[48px] border border-solid border-gray-200">
          <Text>Últimos Meses</Text>
        </View>
      </View>

      <View className="mt-6">
        <PieChart
          data={data}
          colors={colors}
          total={total}
          descriptionTotal="Total"
        />
      </View>
    </View>
  )
}
