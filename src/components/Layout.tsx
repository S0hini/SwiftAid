import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import Sidebar from './Sidebar';

export default function Layout() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}