import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  type AppRouteProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import RequireAuth from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />} key={route.path}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <main className="page-wrapper">
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </main>
  );
};

export default memo(AppRouter);
