import { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from '../mockdata/ProductData'; 


const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    toast.success("Item added to cart successfully!", { autoClose: 3000, closeOnClick: true });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    toast.success("Item removed from cart.", { autoClose: 3000, closeOnClick: true });
  };

  const increaseItemQuantity = (id) => {
    const item = state.items.find(item => item.id === id);
    if (item) {
      dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
    } else {
      const product = products.find(p => p.id === id);
      if (product) {
        addItemToCart(product);
      } else {
        toast.error("Product not found.");
      }
    }
  };

  const decreaseItemQuantity = (id) => {
    const item = state.items.find(item => item.id === id);
    if (item && item.quantity === 1) {
      removeItemFromCart(id);
    } else if (item && item.quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    }
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  return useContext(CartContext);
};