
import {initialState} from './initialState';

/* selectors */
export const getAll = ({watches}) => watches;
export const getOneWatch = ({watches}, _id) => {
  const chosenProduct = watches.filter(item => item._id == _id);
  //console.log('coto jest id', chosenProduct);
  return chosenProduct;
}
export const getOneBracelet = ({bracelets}, _id) => {
  const chosenProduct = bracelets.filter(item => item._id == _id);
  //console.log('coto jest id bracelet', chosenProduct);
  return chosenProduct;
}
export const getOnePromo = ({promoProducts}, _id) => promoProducts.filter(item => item._id == _id);

export const findProductAmount = ({cart}, _id) => { 
    const product = cart.find(item => item._id === _id);
    const productAmount = product.amount;
    return productAmount
};


/* action name creator */
const reducerName = 'watches';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const ADD_WATCH = createActionName('ADD_WATCH');
const ADD_BRACELET = createActionName('ADD_BRACELET');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');


/* action creators */

export const addWatchToCart = payload => ({payload, type: ADD_WATCH});

export const addBraceletToCart = payload => ({payload, type: ADD_BRACELET});

export const changeProductAmount = payload => ({payload, type: CHANGE_AMOUNT});
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT});

/* thunk creators */

/* reducer */
export const reducer = (cart = [], action = {}) => {
  switch (action.type) {
    case ADD_WATCH: 
      const watchId = parseInt(action.payload._id);

      const inCart = cart.some(item => item._id === watchId)


      const newWatch = () => {
        if(inCart){
          const singleWatch = cart.find(item => item._id === watchId);
          singleWatch.amount = singleWatch.amount + action.payload.amount;
          return cart
        } else {
          const singleWatch = initialState.watches.find(item => 
            item._id === watchId);
          singleWatch.amount = action.payload.amount;
          cart.push(singleWatch);
          return cart
        }
      }

      
      return [
        ...newWatch()
      ];

      case ADD_BRACELET: 
      const braceletId = parseInt(action.payload._id);
      
      const brInCart = cart.some(item => item._id === braceletId)

      const newBracelet = () => {
        if(brInCart){
          const singleBracelet = cart.find(item => item._id === braceletId);
          singleBracelet.amount = singleBracelet.amount + action.payload.amount;
          return cart
        } else {
          const singleBracelet = initialState.bracelets.find(item => 
            item._id === braceletId);
            singleBracelet.amount = action.payload.amount;
          cart.push(singleBracelet);
          return cart
        }
      }

      
      return [
        ...newBracelet()
      ];

      case REMOVE_PRODUCT: 

      const id = parseInt(action.payload)

      cart = cart.filter(item => item._id !== id);
      return [
        ...cart
      ];
      case CHANGE_AMOUNT: 
      const prodId = parseInt(action.payload._id);

      const newStatePart = cart.map(item => {
        if(item._id===prodId){
        item.amount = action.payload.amount
        return item
        } else {
        return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify({newStatePart}));

      return [
        ...newStatePart,
      ];
    default:
      return cart;
  }
};
