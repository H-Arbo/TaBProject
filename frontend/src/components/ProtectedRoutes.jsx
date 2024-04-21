import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};