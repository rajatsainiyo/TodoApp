import { createSlice } from "@reduxjs/toolkit";

const inititalstate = {
  Todoarray: [],
  Todoarray2: [],
  Searcharray: [],
};
const myTodo = createSlice({
  name: "Todoapp",
  initialState: inititalstate,
  reducers: {
    addtodo: (state, action) => {
      // 1 method
      // state.Todoarray = [...state.Todoarray, { ...action.payload }];
      // 2nd method
      state.Todoarray = state.Todoarray.concat(action.payload);
    },
    Deletetodo: (state, action) => {
      // 1st method
      state.Todoarray = action.payload;

      // 2nd method
      // const delitem = state.Todoarray.filter((item, index) => {
      //   return index !== action.payload;
      // });
      // state.Todoarray = delitem;
    },
    Updatetodo: (state, action) => {
      //  state.Todoarray=[...action.payload]
      state.Todoarray = action.payload;
    },

    sreachitem: (state, action) => {
      state.Searcharray = [...action.payload];
    },
  },
});

export const { addtodo, Deletetodo, Updatetodo, sreachitem } = myTodo.actions;
export default myTodo.reducer;
