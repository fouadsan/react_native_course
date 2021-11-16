import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { BodyText, TitleText, MainButton } from "../components";
import Colors from "../constants/colors";

function GameOverScreen({ guessRounds, userNumber, newGameHandler }) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={1000}
            source={require("../assets/images/success.png")} // => Local Image
            // source={{
            //   uri: "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
            // }}  => Network Image
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>.
          </BodyText>
        </View>

        <MainButton onPress={newGameHandler}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    marginVertical: Dimensions.get("window").height / 30,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  resultContainer: {
    marginHorizontal: 50,
    marginVertical: (Dimensions.get("window").width * 0.7) / 60,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
