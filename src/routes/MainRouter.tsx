import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './routing/PublicRoutes';
import Login from '../features/authentication/login/Login';
import Dashboard from '../features/authenticated/dashboard/Dashboard';
import ProtectedRoute from './routing/ProtectedRoutes';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
