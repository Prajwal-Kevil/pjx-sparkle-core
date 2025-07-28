import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(formData.name, formData.email, formData.password);
      
      if (success) {
        toast({
          title: "Account created!",
          description: "Welcome to PJX.C! You can now start shopping.",
        });
        window.location.href = "/";
      } else {
        toast({
          title: "Registration failed",
          description: "Unable to create account. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth mb-6 animate-fade-in">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Register Form */}
        <div className="glass rounded-lg p-8 animate-scale-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
            <p className="text-muted-foreground mt-2">
              Join PJX.C and start shopping today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 glass rounded-lg border-0 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-primary border-2 border-border rounded focus:ring-primary/20"
              />
              <label className="text-sm text-muted-foreground">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:text-primary-glow transition-smooth">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:text-primary-glow transition-smooth">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-gradient hover-scale"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-border/10" />
            <span className="px-4 text-sm text-muted-foreground">or</span>
            <div className="flex-1 border-t border-border/10" />
          </div>

          {/* Social Registration */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full hover-scale">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-4 h-4 mr-2" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full hover-scale">
              <div className="w-4 h-4 bg-blue-600 rounded mr-2" />
              Sign up with Facebook
            </Button>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary-glow font-medium transition-smooth">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;