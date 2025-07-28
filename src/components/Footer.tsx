import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card mt-16 border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PJX.C
              </span>
            </div>
            <p className="text-muted-foreground">
              Your trusted e-commerce platform for quality products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                <Facebook className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                <Twitter className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                <Instagram className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="/products" className="block text-muted-foreground hover:text-primary transition-smooth">
                Products
              </a>
              <a href="/categories" className="block text-muted-foreground hover:text-primary transition-smooth">
                Categories
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2">
              <a href="/help" className="block text-muted-foreground hover:text-primary transition-smooth">
                Help Center
              </a>
              <a href="/shipping" className="block text-muted-foreground hover:text-primary transition-smooth">
                Shipping Info
              </a>
              <a href="/returns" className="block text-muted-foreground hover:text-primary transition-smooth">
                Returns
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">support@pjx-c.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PJX.C. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground text-sm hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground text-sm hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;