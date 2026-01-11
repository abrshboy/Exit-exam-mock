
import React, { useState } from 'react';
import Input from '../components/Input';
import { auth, googleProvider } from '../lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} from 'firebase/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      const message = err.code === 'auth/user-not-found' 
        ? "No account found with this email." 
        : err.code === 'auth/wrong-password'
        ? "Incorrect password."
        : err.message;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <i className="fas fa-graduation-cap text-white text-3xl"></i>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Exit Exam Mock
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            {isSignUp ? "Create your student account" : "Sign in to your account"}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleEmailAuth}>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded flex items-center">
              <i className="fas fa-exclamation-circle text-red-400 mr-3"></i>
              <p className="text-xs text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <Input
              label="Email Address"
              icon="fas fa-envelope"
              type="email"
              placeholder="student@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <div className="relative">
              <Input
                label="Password"
                icon="fas fa-lock"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-indigo-600 focus:outline-none"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button 
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {isSignUp ? "Already have an account? Sign In" : "Need an account? Register"}
            </button>
            {!isSignUp && (
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600">
                Forgot password?
              </a>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white shadow-md ${
              isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all'
            }`}
          >
            {isLoading ? (
              <i className="fas fa-circle-notch animate-spin mt-1"></i>
            ) : (
              isSignUp ? "Create Account" : "Sign In"
            )}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-white text-gray-400">Secure social login</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/01212825-google.png" className="w-5 h-5 mr-3" alt="Google" />
              Continue with Google
            </button>
          </div>
        </div>
        
        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
