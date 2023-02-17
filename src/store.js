import { configureStore } from "@reduxjs/toolkit";
import myTodo from "./ReduxManagement/Reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
// const reducer = combineReducers({
//   Reducer: myTodo,
// });
// let persistedReducer = persistReducer(persistConfig, reducer);
// const store = configureStore({
//   reducer: persistedReducer,
// });

const store = configureStore({
  reducer:{
    Reducer: myTodo,
  }
})

export default store;
