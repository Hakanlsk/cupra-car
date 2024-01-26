import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { leon } from "../constants/index";
import ModelCard from "../components/ModelCard";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  return (
    <LinearGradient
      //colors={["#040306", "#0e0c18", "#0e0c18", "#040306"]}
      colors={["#373330", "#4e4946", "#7e7875", "#4e4946", "#373330"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="items-center flex-1 justify-center">
        <StatusBar />
        <View className="my-4 mx-2 justify-center items-center">
          <ModelCard
            carModel="leon"
            image={require("../assets/images/leon/leon-1.jpg")}
            title="LEON"
          />
          <ModelCard
            carModel="formentor"
            image={require("../assets/images/formentor/formentor.jpg")}
            title="FORMENTOR"
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
