import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2250);
  }, []);

  return (
    <LinearGradient
      //colors={["#040306", "#0e0c18", "#0e0c18", "#040306"]}
      colors={["#373330", "#4e4946", "#7e7875", "#4e4946", "#373330"]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          className="h-full w-full"
          style={styles.image}
          source={require("../assets/images/cupra-logo-white.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
