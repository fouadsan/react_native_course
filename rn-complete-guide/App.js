import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Header } from "./components";
import { StartGameScreen, GameScreen, GameOverScreen } from "./screens";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numRounds) => {};

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        newGameHandler={newGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
