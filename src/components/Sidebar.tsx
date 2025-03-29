import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Guitar as Hospital, Briefcase, UserCircle, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';
import { useAuthStore } from '../store/auth';

export default function Sidebar() {
  const { user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">SwiftAid</h2>
        <p className="text-sm text-gray-600">{user?.displayName}</p>
      </div>
      
      <nav className="mt-8">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <MapPin className="w-5 h-5 mr-3" />
          Search Destination
        </NavLink>

        <NavLink
          to="/hospitals"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <Hospital className="w-5 h-5 mr-3" />
          Find Hospital
        </NavLink>

        <NavLink
          to="/equipment"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <Briefcase className="w-5 h-5 mr-3" />
          Equipment List
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <UserCircle className="w-5 h-5 mr-3" />
          Profile
        </NavLink>
      </nav>

      <div className="absolute bottom-0 w-64 p-4">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}