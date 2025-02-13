import * as d3 from 'd3'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { G, Path, Svg, Text as SvgText } from 'react-native-svg'

type PieChartProps = {
  data: { label: string; value: number }[]
  colors: string[]
  total: number
  descriptionTotal: string
  title?: string
  subTitle?: string
}

export default function PieChart({
  data,
  colors,
  title,
  subTitle,
  total,
  descriptionTotal,
}: Readonly<PieChartProps>) {
  const [width, setWidth] = useState(0)
  const radius = width / 2

  const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value)(
    data,
  )
  const arc = d3
    .arc<d3.PieArcDatum<{ label: string; value: number }>>()
    .outerRadius(radius - 10)
    .innerRadius(0)

  const labelArc = d3
    .arc<d3.PieArcDatum<{ label: string; value: number }>>()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40)

  return (
    <View onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
      <View className="relative">
        <View
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 130,
            height: 130,
            borderRadius: 65,
            backgroundColor: '#f3f4f6',
            transform: [{ translateX: -65 }, { translateY: -65 }],
            zIndex: 99,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}
          >
            <Text className="text-[24px] font-extrabold">{total}</Text>
            <Text className="text-gray-500">{descriptionTotal}</Text>
          </View>
        </View>

        <Svg width={width} height={width}>
          <G transform={`translate(${width / 2}, ${width / 2})`}>
            {pie.map((d, i) => (
              <G key={i}>
                <Path d={arc(d) ?? ''} fill={colors[i]} />
                <SvgText
                  transform={`translate(${labelArc.centroid(d)})`}
                  textAnchor="middle"
                  fontSize={14}
                  fill="white"
                >
                  {d.data.value}
                </SvgText>
              </G>
            ))}
          </G>
        </Svg>
      </View>

      <View>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>

      <View className="mt-4">
        {data.map((item, index) => (
          <View key={index} className="flex flex-row items-center mb-2">
            <View
              style={{
                backgroundColor: colors[index],
                width: 16,
                height: 16,
                marginRight: 8,
              }}
            />

            <View className="flex-row justify-between w-full pr-7">
              <Text className="text-gray-900 text-[14px]">{item.label}</Text>
              <Text className="text-gray-900 text-[14px] font-bold">
                {item.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
