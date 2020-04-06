import User from "./user";

interface AuthService {
  loginWithRedirect: Function;
}

export default interface Auth extends AuthService {
  isAuthenticated: boolean;
  loading: boolean;
  logout: Function;
  user: User;
}
