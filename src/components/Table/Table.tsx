import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

interface TableData {
  id: string
  descricao: string
  categoria: string
  teste?: string
}

interface ResponsiveTableProps {
  data: TableData[]
  headers: string[]
}

export default function ResponsiveTable({
  data,
  headers,
}: Readonly<ResponsiveTableProps>) {
  const [selectedAll, setSelectedAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    new Array(data.length).fill(false),
  )

  const toggleSelectAll = () => {
    const newValue = !selectedAll
    setSelectedAll(newValue)
    setSelectedRows(new Array(data.length).fill(newValue))
  }

  const toggleSelectRow = (index: number) => {
    const newSelectedRows = [...selectedRows]
    newSelectedRows[index] = !newSelectedRows[index]
    setSelectedRows(newSelectedRows)
    if (!newSelectedRows[index]) {
      setSelectedAll(false)
    } else if (newSelectedRows.every(Boolean)) {
      setSelectedAll(true)
    }
  }

  return (
    <ScrollView horizontal>
      <View className="flex-col px-2 py-4 bg-additional-white rounded-[16px]">
        <View className="h-[55px] flex-row">
          <View className="w-[50px] border-b border-gray-300">
            <CheckBox
              checked={selectedAll}
              onPress={toggleSelectAll}
              containerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          {headers.map((header) => (
            <View
              key={header}
              className={`w-[200px] p-2 border-b border-gray-300 flex items-start justify-center`}
            >
              <Text className="text-left font-bold text-[18px]">{header}</Text>
            </View>
          ))}
        </View>

        <View>
          {data.map((rowData, rowIndex) => (
            <View key={rowData.id} className="flex-row">
              <View className="w-[50px] border-b border-gray-300">
                <CheckBox
                  checked={selectedRows[rowIndex]}
                  onPress={() => toggleSelectRow(rowIndex)}
                  containerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View
                className={`w-[200px] border-b border-gray-300 flex-row justify-start items-center`}
              >
                <MaterialCommunityIcons
                  name="file-document-multiple"
                  size={24}
                  color="#2563eb"
                />
                <Text className="ml-2 text-[16px] font-semibold">
                  {rowData.descricao}
                </Text>
              </View>
              <View
                className={`w-[200px] p-2 border-b border-gray-300 flex items-start justify-center`}
              >
                <Text className="text-[16px] font-semibold">
                  {rowData.categoria}
                </Text>
              </View>
              <View
                className={`w-[200px] p-2 border-b border-gray-300 flex items-start justify-center`}
              >
                <Text className="text-[16px] font-semibold">
                  {rowData.teste}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
