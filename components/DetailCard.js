import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailCard = ({item}) => {
  return (
    <View className="mx-2">
      <Image style={{height:200, width:280, borderRadius:20}}source={item.image}/>
    </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({})