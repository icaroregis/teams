import Entypo from '@expo/vector-icons/Entypo'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './InputDocuments.styles'

export default function InputsDocuments() {
  const [selectedValue, setSelectedValue] = useState('java')

  return (
    <View className="flex-1 px-2 py-4 bg-additional-white rounded-[16px]">
      <View className="flex-1 relative border border-solid border-gray-200 justify-center items-start rounded-[6px] mt-4">
        <Entypo
          className="absolute left-4 z-10"
          name="magnifying-glass"
          size={18}
        />
        <TextInput
          className="flex-1 pl-[42px] pr-2 h-[48px] text-[16px] text-gray-500 bg-additional-white rounded-xl"
          placeholder="Pesquise um documento..."
          placeholderTextColor="#9e9e9e"
        />
      </View>

      <View style={styles.container}>
        <Picker
          mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={{ fontSize: 14, color: '#6B7280' }}
          numberOfLines={1}
        >
          <Picker.Item label="Todas as categorias" value="" />
        </Picker>
      </View>

      <View className="flex-1">
        <View className="flex-1 flex flex-row gap-3">
          <View className="flex-1 border border-solid border-gray-200 relative rounded-md mt-4">
            <Picker
              selectedValue={selectedValue}
              className="w-full h-12 text-[12px] text-gray-500 bg-white rounded-md"
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Ordenar por: Data" value="" />
            </Picker>
          </View>

          <View className="flex-1 border border-solid border-gray-200 relative rounded-md mt-4">
            <Picker
              selectedValue={selectedValue}
              className="w-full h-12 text-base text-gray-500 bg-white rounded-md"
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Filtrar período" value="" />
            </Picker>
          </View>
        </View>
      </View>
    </View>
  )
}
