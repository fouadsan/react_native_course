import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import { GoalInput, GoalItem } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    const newCourseGoals = courseGoals.filter((goal) => goal.id !== goalId);
    setCourseGoals(newCourseGoals);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        isAddMode={isAddMode}
        cancelGoalAdditionHandler={cancelGoalAdditionHandler}
      />
      <FlatList
        // if key name != key or id use keyExtractor
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            value={itemData.item.value}
            onDelete={() => removeGoalHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
