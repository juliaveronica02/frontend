// import Item1 from "./../img/mandiri.png";
// import Item2 from "./../img/ovo.jpg";
// import Item3 from "./../img/twitter.png";
// import Item4 from "./../img/fb.png";
// import Item5 from "./../img/bri.png";
// import Item6 from "./../img/line.png";
// import { ADD_TO_CART } from "./../actioncreators/cart";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const initState = () => {
//   const items = [
//     {
//       name: "",
//       price: "",
//       description: "",
//       quantity: "",
//       imagerUrl: "",
//     },
//   ];
//   addedItems: [],
//   total: 0,
// };
// const [items, setItems] = useState([]);
// useEffect(() => {
//   axios.get("https://api.juliaveronica.com/item/show").then((res) => {
//     console.log(res.items);
//     setItems(res.items);
//   });
// }, []);
// const cartReducer = (state = initState, action) => {
//     //INSIDE HOME COMPONENT
//     if (action.type === ADD_TO_CART) {
//       let addedItem = state.items.find((item) => item.id === action.id);
//       //check if the action id exists in the addedItems
//       let existed_item = state.addedItems.find((item) => action.id === item.id);
//       if (existed_item) {
//         addedItem.quantity += 1;
//         return {
//           ...state,
//           total: state.total + addedItem.price,
//         };
//       } else {
//         addedItem.quantity = 1;
//         //calculating the total
//         let newTotal = state.total + addedItem.price;
//         return {
//           ...state,
//           addedItems: [...state.addedItems, addedItem],
//           total: newTotal,
//         };
//       }
//     } else {
//       return state;
//     }
// };

// export default cartReducer;

import localforage from 'localforage'

const initialState = {
    keranjang: localforage.getItem('keranjang')
}


const reducers = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducers;
