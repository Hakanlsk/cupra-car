import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {leon} from '../constants/index'
import ModelCard from '../components/ModelCard'

const HomeScreen = () => {
  return (
    <SafeAreaView className="items-center flex-1 justify-center bg-white">
      <StatusBar/>
      <View className="my-4 mx-2 justify-center items-center">
        <ModelCard carModel='leon' image={require('../assets/images/leon/leon-1.jpg')} title='LEON'/>
        <ModelCard carModel='formentor' image={require('../assets/images/formentor/formentor.jpg')} title='FORMENTOR'/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})