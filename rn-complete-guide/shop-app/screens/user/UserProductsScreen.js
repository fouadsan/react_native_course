import React from "react";
import { FlatList, Button, Platform, Alert } from "react-native";
import ProdutItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";

function UserProductsScreen({ navigation }) {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    navigation.navigate("EditProduct", {
      productId: id,
    });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are you sure?", "Do you really want to delete this items?", [
      { text: "No", style: "default" },
      {
        text: "yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProdutItem
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          price={itemData.item.price}
          onSelect={() => {
            dispatch(productsActions.deleteProduct(itemData.item.id));
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProdutItem>
      )}
    />
  );
}

export default UserProductsScreen;
