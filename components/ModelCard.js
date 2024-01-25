import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const ModelCard = ({image, title, carModel}) => {

  const navigation = useNavigation()

  return (
    <SafeAreaView>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {...image,title,carModel})}>
            <View className="mt-8 relative">
                <View>
                    <Image style={{height:240, width:320, borderRadius:20}} source={image}/>
                </View>
                <Text className="absolute bottom-3 left-5 text-2xl text-white font-semibold">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModelCard

const styles = StyleSheet.create({})