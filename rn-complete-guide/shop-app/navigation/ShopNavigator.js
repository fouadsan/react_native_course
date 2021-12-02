import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import {
  ProductsOverviewScreen,
  ProductDetailScreen,
  CartScreen,
  OrdersScreen,
  AuthScreen,
} from "../screens/shop";
import { UserProductsScreen, EditProductScreen } from "../screens/user";
import CustomHeaderButton from "../components/UI/CustomHeaderButton";

import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: "android" ? "#fff" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};

function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="Products"
      screenOptions={{
        ...screenOptions,
        drawerActiveTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={size}
              color={color}
            />
          ),

          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />

      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={() => ({
          title: "Your Orders",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={size}
              color={color}
            />
          ),
        })}
      />

      <Drawer.Screen
        name="Admin"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          title: "Admin",

          headerTitle: "Your Products",

          drawerIcon: ({ color, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={size}
              color={color}
            />
          ),

          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() => {
                  navigation.navigate("EditProduct");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Your Cart" }}
        />

        <Stack.Screen
          name="EditProduct"
          component={EditProductScreen}
          options={{ title: "Edit Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: "Authenticate" }}
        />

        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainApp;
