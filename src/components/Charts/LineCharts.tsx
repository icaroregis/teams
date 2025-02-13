import * as d3 from 'd3'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

type LineChartProps = {
  data: number[]
  color: string
  title: string
  subTitle: string
}

const CHART_ASPECT_RATIO = 9 / 16

export function LineChart({
  data,
  color,
  title,
  subTitle,
}: Readonly<LineChartProps>) {
  const [width, setWidth] = useState(0)
  const height = width * CHART_ASPECT_RATIO
  const chartHeight = (height * 2) / 4

  const min = Math.min(...data)
  const max = Math.max(...data)
  const yScale = d3.scaleLinear().domain([min, max]).range([chartHeight, 0])
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width])

  const lineFn = d3
    .line<number>()
    .x((d, i) => xScale(i))
    .y((d, i) => yScale(d))
    .curve(d3.curveCardinal.tension(0.3))

  const areaFn = d3
    .area<number>()
    .x((d, i) => xScale(i))
    .y0(height)
    .y1((d, i) => yScale(d))
    .curve(d3.curveCardinal.tension(0.3))

  const svgLine = lineFn(data) ?? ''
  const svgArea = areaFn(data) ?? ''

  return (
    <View onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height - 12}`}
      >
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={color} stopOpacity={0.7}></Stop>
            <Stop offset="100%" stopColor={color} stopOpacity={0}></Stop>
          </LinearGradient>
        </Defs>
        <Path d={svgLine} stroke={color} fill="none" strokeWidth={4} />
        <Path d={svgArea} stroke="none" fill="url(#gradient)" />
      </Svg>

      <View>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  )
}
