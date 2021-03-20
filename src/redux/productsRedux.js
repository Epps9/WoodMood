
/* selectors */
export const getOneWatch = ({watches}, id) => {
  const chosenProduct = watches.data.filter(item => item._id === id);
  return chosenProduct;
};
export const getOneBracelet = ({bracelets}, id) => {
  const chosenProduct = bracelets.data.filter(item => item._id === id);
  return chosenProduct;
};
export const getOnePromo = ({promoProducts}, id) => promoProducts.data.filter(item => item._id === id);

export const findProductAmount = ({cart}, _id) => { 
  const product = cart.find(item => item._id === _id);
  const productAmount = product.amount;
  return productAmount;
};


/* action name creator */
const reducerName = 'watches';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const ADD_WATCH = createActionName('ADD_WATCH');
const ADD_BRACELET = createActionName('ADD_BRACELET');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const ADD_PROMO = createActionName('ADD_PROMO');

/* action creators */

export const addWatchToCart = payload => ({payload, type: ADD_WATCH});
export const addBraceletToCart = payload => ({payload, type: ADD_BRACELET});
export const addPromoToCart = payload => ({payload, type: ADD_PROMO});

export const changeProductAmount = payload => ({payload, type: CHANGE_AMOUNT});
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT});


/* thunk creators */

/* reducer */
export const reducer = (cart = [], action = {}) => {
  switch (action.type) {
    case ADD_WATCH: 
      const watchId = action.payload._id;

      const inCart = cart.some(item => item._id === watchId);

      const watches = JSON.parse(localStorage.getItem('watches'));

      const newWatch = () => {
        if(inCart){
          const singleWatch = cart.find(item => item._id === watchId);

          singleWatch.amount = singleWatch.amount + action.payload.amount;
          localStorage.setItem('cart', JSON.stringify({data: cart}));
          return cart;
        } else {
          const singleWatch = watches.data.find(item => 
            item._id === watchId);

          singleWatch.amount = action.payload.amount;
          cart.push(singleWatch);
          localStorage.setItem('cart', JSON.stringify({data: cart}));
          return cart;

        }
      };
      
      return [
        ...newWatch(),
      ];

    case ADD_BRACELET: 
      const braceletId = action.payload._id;
      
      const brInCart = cart.some(item => item._id === braceletId);

      const bracelets = JSON.parse(localStorage.getItem('bracelets'));


      const newBracelet = () => {
        if(brInCart){
          const singleBracelet = cart.find(item => item._id === braceletId);
          singleBracelet.amount = singleBracelet.amount + action.payload.amount;
          localStorage.setItem('cart', JSON.stringify({data: cart}));
          return cart;
        } else {
          const singleBracelet = bracelets.data.find(item => 
            item._id === braceletId);
            singleBracelet.amount = action.payload.amount;
          cart.push(singleBracelet);
          localStorage.setItem('cart', JSON.stringify({data: cart}));
          return cart;
        }
      };

      
      return [
        ...newBracelet(),
      ];

    case ADD_PROMO: 
      const promoId = action.payload._id;

      const promoInCart = cart.some(item => item._id === promoId);

      const promoProducts = JSON.parse(localStorage.getItem('promoProducts'));

      const newPromo = () => {
        if(promoInCart){
          const singlePromo = cart.find(item => item._id === promoId);

          singlePromo.amount = singlePromo.amount + action.payload.amount;
          localStorage.setItem('cart', JSON.stringify({data: cart}));

          return cart;
        } else {
          const singlePromo = promoProducts.data.find(item => 
            item._id === promoId);

          singlePromo.amount = action.payload.amount;
          cart.push(singlePromo);
          localStorage.setItem('cart', JSON.stringify({data: cart}));
          return cart;
        }
      };

      
      return [
        ...newPromo(),
      ];

    case REMOVE_PRODUCT: 

      const id = action.payload;

      //cart = cart.filter(item => item._id !== id);

      const carton = JSON.parse(localStorage.getItem('cart'));

      const newCart = carton.data.filter(item => item._id !== id);

      localStorage.setItem('cart', JSON.stringify({data: newCart}))

      return [
        ...newCart,
      ];

    case CHANGE_AMOUNT: 
      const prodId = action.payload._id;

      const cartProd = JSON.parse(localStorage.getItem('cart'));

      const newStatePart = cartProd.data.map(item => {
        if(item._id===prodId){
          item.amount = action.payload.amount;
          return item;
        } else {
          return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify({data: newStatePart}))

      return [
        ...newStatePart,
      ];


    default:
      return cart;
  }
};
