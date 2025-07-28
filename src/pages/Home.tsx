import { useState, useEffect } from "react";
import { ShoppingBag, Truck, Shield, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/context/CartContext";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for featured products
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
        category: "Electronics",
        rating: 4.8,
        stock: 15
      },
      {
        id: "2",
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Advanced fitness tracking with heart rate monitoring and GPS.",
        category: "Wearables",
        rating: 4.6,
        stock: 23
      },
      {
        id: "3",
        name: "Organic Cotton T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
        category: "Clothing",
        rating: 4.4,
        stock: 8
      },
      {
        id: "4",
        name: "Mechanical Gaming Keyboard",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
        description: "RGB mechanical keyboard with tactile switches for gaming and productivity.",
        category: "Electronics",
        rating: 4.7,
        stock: 12
      }
    ];

    // Simulate API loading
    setTimeout(() => {
      setFeaturedProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in-up">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                PJX.C
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover amazing products with exceptional quality and unbeatable prices. 
              Your satisfaction is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="btn-gradient hover-scale">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 glass rounded-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Discover our handpicked selection of premium products that our customers love
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="glass rounded-lg p-4 animate-pulse">
                  <div className="bg-muted h-48 rounded-lg mb-4" />
                  <div className="space-y-3">
                    <div className="bg-muted h-4 rounded w-3/4" />
                    <div className="bg-muted h-4 rounded w-1/2" />
                    <div className="bg-muted h-8 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-scale">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground animate-fade-in">
              Ready to Start Shopping?
            </h2>
            <p className="text-primary-foreground/80 text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join thousands of satisfied customers and discover why PJX.C is the preferred choice for online shopping.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="hover-scale animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;