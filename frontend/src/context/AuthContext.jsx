import { createContext, useContext } from 'react';

// Holds the authenticated user + auth actions, available app-wide
const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
