import {PropsWithChildren, useCallback} from 'react';
import {MMKV, useMMKVObject, useMMKVString} from 'react-native-mmkv';
import SessionContext from './SessionContext';
import {User} from '../../../Auth/data/AuthRepository';

export const storage = new MMKV();

const SessionProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useMMKVObject<User>('user', storage);
  const [accessToken, setAccessToken] = useMMKVString('accessToken', storage);

  const saveSession = useCallback(
    (userLogged: User, token: string) => {
      setUser(userLogged);
      setAccessToken(token);
    },
    [setAccessToken, setUser],
  );

  const updateUser = useCallback(
    (updatedUser: User) => {
      setUser(updatedUser);
    },
    [setUser],
  );

  const logout = useCallback(() => {
    storage.delete('accessToken');
    storage.delete('user');
  }, []);

  return (
    <SessionContext.Provider
      value={{accessToken, user, logout, saveSession, updateUser}}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
