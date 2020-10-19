// import initState from "./reducers/initState";

// export const loadState = () => {
//   try {
//     const cart = localStorage.getItem("cart");
//     if (cart === null) {
//       return undefined;
//     }

//     const parsedCart = JSON.parse(cart);
//     // console.log(parsedCart);
//     return {
//       cart: parsedCart.cart,
//     };
//   } catch (err) {
//     console.log(err);
//     return undefined;
//   }
// };

// export const saveState = (cart) => {
//   try {
//     const state = JSON.stringify(cart);
//     localStorage.setItem("cart", state);
//   } catch (err) {
//     console.log(err);
//   }
// };
