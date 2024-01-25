import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {leon} from '../constants/index'
import {formentor} from '../constants/index'
import DetailCard from '../components/DetailCard'

const DetailScreen = (props) => {
    const item = props.route.params;

  return (
    <SafeAreaView className="bg-white flex-1">
        <View className="items-center mt-6 mb-10">
            <Text className="text-gray-700 font-bold text-3xl">{item.title}</Text>
        </View>
        <Text className="text-gray-600 font-bold text-2xl ml-4 mb-4">DIŞ TASARIM</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            >
            {item.carModel === 'leon' ? (
                leon.map((car, index) => (
                <DetailCard
                    item={car}
                    key={index}
                />
                ))
            ) : item.carModel === 'formentor' ? (
                formentor.map((car, index) => (
                <DetailCard
                    item={car}
                    key={index}
                />
                ))
            ) : (
                // Eğer carModel ne 'leon' ne de 'formentor' ise burada başka bir işlem veya bileşen ekleyebilirsiniz.
                <Text>Belirtilen carModel için uygun veri bulunamadı.</Text>
            )}
        </ScrollView>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})