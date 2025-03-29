import { useState } from 'react';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../lib/firebase';
import { Ambulance, AlertCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      
      // If popup is blocked, try redirect method
      if (error.code === 'auth/popup-blocked') {
        try {
          await signInWithRedirect(auth, googleProvider);
          // No need to navigate here as Firebase will handle the redirect
        } catch (redirectError) {
          setError('Please enable popups for this site to sign in with Google');
        }
      } else {
        setError('Failed to sign in with Google. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Ambulance className="w-12 h-12 text-blue-500" />
          <h1 className="text-3xl font-bold ml-3 text-gray-800">SwiftAid</h1>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Emergency Route Optimization System
        </h2>
        
        <p className="text-gray-600 text-center mb-8">
          Sign in to access the emergency response system
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <img
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
            alt="Google"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}