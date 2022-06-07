import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Item from "./Item/Item";
import { Wrapper } from "./App-stlye";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = () => {};

  const handleAddToCart = (clickedItem: CartItemType) => {};

  const handleRemoveFromCart = () => {};

  data ? console.log(data) : console.log("none");

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
