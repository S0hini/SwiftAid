import React from 'react';
import { UserCircle, Mail, MapPin, CreditCard } from 'lucide-react';
import { useAuthStore } from '../store/auth';

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'Profile'}
              className="w-20 h-20 rounded-full"
            />
          ) : (
            <UserCircle className="w-20 h-20 text-gray-400" />
          )}
          
          <div>
            <h2 className="text-xl font-semibold">{user?.displayName || 'User'}</h2>
            <p className="text-gray-600">Emergency Response Team</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>{user?.email}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Location: Not specified</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <CreditCard className="w-5 h-5" />
            <span>License: Not uploaded</span>
          </div>
        </div>
      </div>
    </div>
  );
}