import React, { createContext, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const RouterContext = createContext<RouteComponentProps | undefined>(undefined);

export function useRouter() {
  const ctx = useContext(RouterContext) as RouteComponentProps;
  return ctx;
}

const BaseRouterProvider: React.FC<RouteComponentProps> = ({
  children,
  ...routeProps
}) => {
  return (
    <RouterContext.Provider value={routeProps}>
      {children}
    </RouterContext.Provider>
  );
};

export const RouterProvider = withRouter(BaseRouterProvider);
