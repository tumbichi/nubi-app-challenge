import {createContext} from 'react';
import {User, UserDetails} from '@/Auth/data/AuthRepository';

interface SessionContext {
  user?: User;
  details?: UserDetails;
  accessToken?: string;
  logout: () => void;
  saveSession: (user: User, details: UserDetails, accessToken?: string) => void;
  updateUser: (user: User) => void;
  updateDetails: (details: UserDetails) => void;
}

export default createContext<SessionContext | undefined>(undefined);
