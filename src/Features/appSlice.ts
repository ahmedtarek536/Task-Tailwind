import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  title: string;
  img: string;
  price: number;
}

interface CartItem extends Product {
  num: number;
}

interface AppState {
  products: Product[];
  cart: CartItem[];
  pageIsProducts: boolean;
}

const initProducts: Product[] = [
  {
    title: "Widget",
    img: "https://m.media-amazon.com/images/I/61I22cL7v+L._AC_UL480_FMwebp_QL65_.jpg",
    price: 9.99,
  },
  {
    title: "Premium Widget",
    img: "https://m.media-amazon.com/images/I/71kbRVr8YfL._AC_UL480_FMwebp_QL65_.jpg",
    price: 19.99,
  },
  {
    title: "Deluxe Widget",
    img: "https://m.media-amazon.com/images/I/71FnggdCAJL._AC_SX466_.jpg",
    price: 29.99,
  },
];

const initialState: AppState = {
  products: initProducts,
  cart: [],
  pageIsProducts: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updatePage(state) {
      state.pageIsProducts = !state.pageIsProducts;
    },
    addToCart(state, action: PayloadAction<Product>) {
      const itemInCart = state.cart.find(
        (item) => item.title === action.payload.title,
      );
      if (itemInCart && itemInCart.num < 10) {
        state.cart = state.cart.map((item) =>
          item.title === itemInCart.title
            ? { ...item, num: item.num + 1 }
            : item,
        );
      } else if (!itemInCart) {
        state.cart.push({ ...action.payload, num: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<{ title: string }>) {
      state.cart = state.cart.filter(
        (item) => item.title !== action.payload.title,
      );
    },
    updateItemInCart: {
      prepare(product: Product, newNum: number) {
        return { payload: { product, newNum } };
      },
      reducer(
        state,
        action: PayloadAction<{ product: Product; newNum: number }>,
      ) {
        state.cart = state.cart.map((item) =>
          item.title === action.payload.product.title
            ? { ...item, num: action.payload.newNum }
            : item,
        );
      },
    },
  },
});

export const { updatePage, addToCart, removeFromCart, updateItemInCart } =
  appSlice.actions;
export default appSlice.reducer;
