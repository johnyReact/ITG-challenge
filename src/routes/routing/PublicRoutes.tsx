import React from 'react';
import useAuth from '../../app/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const isAuth = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PublicRoute;
