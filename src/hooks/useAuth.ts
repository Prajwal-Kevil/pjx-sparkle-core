import { useAuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const context = useAuthContext();
  
  return {
    isAuthenticated: context.isAuthenticated,
    user: context.user,
    token: context.token,
    login: context.login,
    register: context.register,
    logout: context.logout,
    updateProfile: context.updateProfile,
  };
};