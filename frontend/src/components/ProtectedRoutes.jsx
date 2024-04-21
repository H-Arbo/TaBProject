import { Navigate, useLocation} from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  console.log(user);
  if (!user && location.state) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};