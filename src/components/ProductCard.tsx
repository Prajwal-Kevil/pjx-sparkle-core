import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className={`group glass rounded-lg overflow-hidden hover-lift transition-smooth ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
        />
        
        {/* Stock Badge */}
        {product.stock < 10 && product.stock > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 left-2 animate-pulse-glow"
          >
            Only {product.stock} left!
          </Badge>
        )}
        
        {product.stock === 0 && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 left-2"
          >
            Out of Stock
          </Badge>
        )}

        {/* Heart Icon */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 w-8 h-8 p-0 glass hover:bg-primary/20 transition-smooth ${
            isLiked ? "text-red-500" : "text-muted-foreground"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <Badge variant="secondary" className="text-xs">
          {product.category}
        </Badge>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isAdding}
            className={`btn-gradient ${isAdding ? "animate-pulse" : ""} hover-scale`}
            size="sm"
          >
            {isAdding ? (
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;