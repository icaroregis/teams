import Header from '@components/Header'
import InputsDocuments from '@components/InputDocuments/InputsDocuments'
import Modal from '@components/Modal/Modal'
import ResponsiveTable from '@components/Table/Table'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Documents() {
  const [showModalDocuments, setShowModalDocuments] = useState(false)
  const headers = ['Usuário', 'Categoria', 'Teste']
  const data = [
    {
      id: '1',
      descricao: 'nome_do_arquivo.pdf',
      categoria: 'Recursos Humanos',
      teste: 'teste',
    },
    {
      id: '2',
      descricao: 'nome_do_arquivo.csv',
      categoria: 'Financeiro',
      teste: 'teste',
    },
    {
      id: '3',
      descricao: 'nome_do_arquivo.csv',
      categoria: 'Diretoria',
      teste: 'teste',
    },
    {
      id: '4',
      descricao: 'nome_do_arquivo.csv',
      categoria: 'Almoxarifado',
      teste: 'teste',
    },
  ]

  return (
    <ScrollView className="flex-col gap-4 bg-gray-100">
      <Header
        isHome={false}
        withIcon={true}
        title="Documentos"
        secondaryTitle="Início > Documentos"
      />

      <View className="flex flex-row justify-between items-center pt-5 px-4">
        <View>
          <Text className="text-[18px] font-bold">Últimos documentos</Text>
          <Text className="text-[18px] font-bold">compartilhados</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowModalDocuments(!showModalDocuments)}
          className="flex-row items-center gap-2 bg-blue-600 px-[15px] py-[9px] rounded-lg"
        >
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={24}
            color="#ffffff"
          />
          <Text className="text-[14px] text-['#ffffff'] font-bold">
            Validar documento
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-full rounded-t-[24px] px-4 gap-4 mt-4">
        <InputsDocuments />
      </View>

      <View className="w-full rounded-t-[24px] px-4 gap-4 mt-4 mb-16">
        <ResponsiveTable data={data} headers={headers} />
      </View>

      <Modal
        className="h-[430px] w-[350px]"
        isVisible={showModalDocuments}
        toggleOverlay={() => setShowModalDocuments(false)}
      >
        <View className="flex-col items-center justify-start h-full">
          <MaterialCommunityIcons
            className="mt-2"
            name="text-box-search-outline"
            size={80}
            color="#2563eb"
          />

          <Text className="text-[22px] font-extrabold mt-4">
            Validar documento
          </Text>

          <View className="flex flex-col justify-center items-center mt-4">
            <Text className="text-[16px] text-gray-500">
              Digite o número de validação do
            </Text>
            <Text className="text-[16px] text-gray-500">
              documento que você deseja verificar a
            </Text>
            <Text className="text-[16px] text-gray-500">autenticidade</Text>
          </View>

          <View className="w-full mt-7">
            <Text className="text-[14px]">
              Número de validação do documento
            </Text>
            <View className="border border-solid border-gray-200 relative justify-center items-center rounded-[6px] mt-2">
              <TextInput
                className="pl-[20px] w-full h-[48px] text-[16px] text-gray-500 bg-additional-white rounded-xl"
                placeholder="Digite o número de validação..."
              />
              <MaterialCommunityIcons
                name="file-find"
                size={24}
                color="black"
                className="absolute right-4 z-10 !text-gray-500"
              />
            </View>
          </View>

          <View className="w-full mt-7 bg-blue-600 px-4 py-2 rounded-lg h-[56px] flex justify-center items-center">
            <TouchableOpacity onPress={() => setShowModalDocuments(false)}>
              <Text className="text-additional-white text-[18px]">
                Validar documento
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}
