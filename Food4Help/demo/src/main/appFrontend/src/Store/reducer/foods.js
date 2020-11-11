import {
  SET_PRODUCTS
} from '../actions/foods';
import Food from '../../models/foods';

const initialState = {
  availableFoods: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOODS:
        return {
            id: action.id,
            name: action.name,
            type: action.type,
            amount: action.amount,
            SKU: action.SKU
        };

//    case CREATE_PRODUCT:
//      const newProduct = new Product(
//        action.productData.id,
//        action.productData.ownerId,
//        action.productData.pushToken,
//        action.productData.title,
//        action.productData.imageUrl,
//        action.productData.description,
//        action.productData.price
//      );
//      return {
//        ...state,
//        availableProducts: state.availableProducts.concat(newProduct),
//        userProducts: state.userProducts.concat(newProduct)
//      };
//    case UPDATE_PRODUCT:
//      const productIndex = state.userProducts.findIndex(
//        prod => prod.id === action.pid
//      );
//      const updatedProduct = new Product(
//        action.pid,
//        state.userProducts[productIndex].ownerId,
//        state.userProducts[productIndex].pushToken,
//        action.productData.title,
//        action.productData.imageUrl,
//        action.productData.description,
//        state.userProducts[productIndex].price
//      );
//      const updatedUserProducts = [...state.userProducts];
//      updatedUserProducts[productIndex] = updatedProduct;
//      const availableProductIndex = state.availableProducts.findIndex(
//        prod => prod.id === action.pid
//      );
//      const updatedAvailableProducts = [...state.availableProducts];
//      updatedAvailableProducts[availableProductIndex] = updatedProduct;
//      return {
//        ...state,
//        availableProducts: updatedAvailableProducts,
//        userProducts: updatedUserProducts
//      };
//    case DELETE_PRODUCT:
//      return {
//        ...state,
//        userProducts: state.userProducts.filter(
//          product => product.id !== action.pid
//        ),
//        availableProducts: state.availableProducts.filter(
//          product => product.id !== action.pid
//        )
//      };
  }
  return state;
};