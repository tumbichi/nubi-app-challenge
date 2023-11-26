import {createContext} from 'react';
import {User} from '../../../Auth/data/AuthRepository';

interface SessionContext {
  user?: User;
  accessToken?: string;
  logout: () => void;
  saveSession: (user: User, accessToken: string) => void;
  updateUser: (user: User) => void;
}

export default createContext<SessionContext | undefined>(undefined);
