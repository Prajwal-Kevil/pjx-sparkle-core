import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalAmount, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-bounce-in">
            <ShoppingBag className="w-12 h-12 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/">
            <Button className="btn-gradient hover-scale">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Button
            variant="destructive"
            onClick={clearCart}
            className="hover-scale"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="glass rounded-lg p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <p className="text-lg font-bold text-primary mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 hover-scale"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-foreground font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 hover-scale"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive hover-scale"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Item Total */}
                <div className="flex justify-end mt-4 pt-4 border-t border-border/10">
                  <span className="text-foreground font-semibold">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-lg p-6 sticky top-24 animate-fade-in-left">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalAmount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {totalAmount > 50 ? 'Free' : '$5.99'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${(totalAmount * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-border/10 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-lg font-bold text-primary">
                      ${(totalAmount + (totalAmount > 50 ? 0 : 5.99) + totalAmount * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                {totalAmount < 50 && (
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                      Add ${(50 - totalAmount).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3 mt-6">
                <Link to="/checkout" className="block">
                  <Button className="w-full btn-gradient hover-scale">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/" className="block">
                  <Button variant="outline" className="w-full hover-scale">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;