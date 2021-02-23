
import {initialState} from './initialState';

/* selectors */
export const getAll = ({products}) => products.watches;
export const getOneWatch = ({products}, id) => {
  const chosenProduct = products.watches.filter(item => item.id == id);
  //console.log('coto jest id', chosenProduct);
  return chosenProduct;
}
export const getOneBracelet = ({products}, id) => {
  const chosenProduct = products.bracelets.filter(item => item.id == id);
  //console.log('coto jest id bracelet', chosenProduct);
  return chosenProduct;
}
export const getOnePromo = ({products}, id) => products.promoProducts.filter(item => item.id == id);


/* action name creator */
const reducerName = 'watches';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addProductToCart = payload => ({payload, type: ADD_PRODUCT})
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT})

/* thunk creators */

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: 
      const productId = parseInt(action.payload.id);
      console.log('actionpayload', productId)

      const product = statePart.products.watches.find(item => item.id === productId);
      console.log('wyszukany produkt', product);

      const addProduct = statePart.cart.push(product);
      return {
        ...statePart,
        cart: addProduct,
      };
    default:
      return statePart;
  }
};
