import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/product';
import cartReducer from './store/reducers/cart'

import ShopNavigator from './navigation/ShopNavigator'

//here it will used for Combine all the reducer and provides to the createStore function to create redux.
const rootRoute = combineReducers({
  products: productReducer,
  cart:cartReducer
});

const store = createStore(rootRoute);


export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
