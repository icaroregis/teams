import Header from '@components/Header'
import InputsDocuments from '@components/InputDocuments/InputsDocuments'
import ResponsiveTable from '@components/Table/Table'
import { ScrollView, View } from 'react-native'
import Cards from './components/Cards'
import ContainerPieCharts from './components/ContainerPieCharts'

export default function Home() {
  const objectCards = [
    { title: 'Solicitações', value: 1932 },
    { title: 'Documentos', value: 1932 },
    { title: 'Processos', value: 1932 },
    { title: 'Dados', value: 1932 },
  ]

  const colors = ['#f59e0b', '#10b981', '#ef4444']
  const dataPieCharts = [
    { label: 'Concluído', value: 50 },
    { label: 'Em aberto', value: 100 },
    { label: 'Solicitações', value: 20 },
  ]
  const total = dataPieCharts.reduce((acc, item) => acc + item.value, 0)
  const dataPieChartsDocuments = [
    { label: 'Comunicados', value: 36 },
    { label: 'Portaria', value: 13 },
    { label: 'Contratos', value: 6 },
  ]
  const totalDocuments = dataPieChartsDocuments.reduce(
    (acc, item) => acc + item.value,
    0,
  )

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
  ]

  return (
    <ScrollView className="flex-col gap-4 bg-gray-100">
      <Header
        isHome={true}
        title="Olá, visitante!"
        secondaryTitle="Seja bem-vindo ao nosso canal de transparência"
      />

      <Cards data={objectCards} />

      <View className="w-full rounded-t-[24px] px-4 gap-4">
        <ContainerPieCharts
          title={'Solicitações'}
          subTitle={'realizadas'}
          data={dataPieCharts}
          colors={colors}
          total={total}
        />

        <ContainerPieCharts
          title={'Documentos'}
          subTitle={'disponíveis'}
          data={dataPieChartsDocuments}
          colors={colors}
          total={totalDocuments}
        />
      </View>

      <View className="w-full rounded-t-[24px] px-4 gap-4 mt-4">
        <InputsDocuments />
      </View>

      <View className="w-full rounded-t-[24px] px-4 gap-4 mt-4 mb-16">
        <ResponsiveTable data={data} headers={headers} />
      </View>
    </ScrollView>
  )
}
