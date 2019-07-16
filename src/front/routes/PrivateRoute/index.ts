const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? {...props} as Route /> : to as Redirect="/login" />;
