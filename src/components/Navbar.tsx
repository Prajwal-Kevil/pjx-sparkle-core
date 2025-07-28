import { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { isAuthenticated, user } = useAuth();

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="glass sticky top-0 z-50 px-4 py-4 animate-fade-in">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PJX.C
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-smooth">
            Home
          </a>
          <a href="/products" className="text-foreground hover:text-primary transition-smooth">
            Products
          </a>
          <a href="/categories" className="text-foreground hover:text-primary transition-smooth">
            Categories
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-smooth">
            About
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Button
            variant="ghost"
            size="sm"
            className="relative hover-scale"
            onClick={() => window.location.href = '/cart'}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs animate-bounce-in"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>

          {/* User Account */}
          <Button
            variant="ghost"
            size="sm"
            className="hover-scale"
            onClick={() => window.location.href = isAuthenticated ? '/profile' : '/login'}
          >
            <User className="w-5 h-5" />
            {isAuthenticated && (
              <span className="hidden sm:inline ml-2">
                {user?.name?.split(' ')[0]}
              </span>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover-scale"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glass rounded-lg p-4 animate-slide-in-bottom">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-foreground hover:text-primary transition-smooth py-2">
                Home
              </a>
              <a href="/products" className="text-foreground hover:text-primary transition-smooth py-2">
                Products
              </a>
              <a href="/categories" className="text-foreground hover:text-primary transition-smooth py-2">
                Categories
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-smooth py-2">
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;