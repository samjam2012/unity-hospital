import { Auth0User } from "./user";

interface AuthService {
  loginWithRedirect: Function;
}

export default interface Auth extends AuthService {
  isAuthenticated: boolean;
  loading: boolean;
  logout: Function;
  user: Auth0User;
}
