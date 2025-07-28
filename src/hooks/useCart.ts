import { useCartContext, Product } from '@/context/CartContext';

export const useCart = () => {
  const { state, dispatch } = useCartContext();

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    cartItems: state.items,
    totalAmount: state.total,
    totalItems: state.itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};