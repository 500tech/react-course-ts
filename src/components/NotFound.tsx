import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const NotFound: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <div>
      Page <pre>{location.pathname}</pre> not found :(
    </div>
  );
};
