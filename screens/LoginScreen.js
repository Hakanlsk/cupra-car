import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    },2250)
  },[])


  return (
    <View style={styles.container}>
      <Image 
      className="h-full w-full"
      style={styles.image} 
      source={require('../assets/images/cupra-logo.jpg')}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  image:{
    resizeMode:'contain',
    
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})