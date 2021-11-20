import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MealList } from "../components";
import { MEALS } from "../data/dummy-data";
import { CustomHeaderButton } from "../components";

function FavoritesScreen({ navigation }) {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={navigation} />;
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
