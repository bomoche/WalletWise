// Route guard wrapper - redirects unauthenticated users to login
// TODO: hook into AuthContext
const ProtectedRoute = ({ children }) => {
  return children;
};

export default ProtectedRoute;
