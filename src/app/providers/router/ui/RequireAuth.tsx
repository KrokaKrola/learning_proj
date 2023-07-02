import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
