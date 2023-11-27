import {PropsWithChildren, useCallback} from 'react';
import {MMKV, useMMKVObject, useMMKVString} from 'react-native-mmkv';

import {User, UserDetails} from '@/Auth/data/AuthRepository';

import SessionContext from './SessionContext';
import Config from 'react-native-config';

export const storage = new MMKV({
  id: 'global-app-storage',
  encryptionKey: Config.STORAGE_SECRET_KEY || undefined,
});

const SessionProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useMMKVObject<User>('user', storage);
  const [details, setDetails] = useMMKVObject<UserDetails>('details', storage);
  const [accessToken, setAccessToken] = useMMKVString('accessToken', storage);

  const saveSession = useCallback(
    (userLogged: User, userDetails: UserDetails, token?: string) => {
      setUser(userLogged);
      setDetails(userDetails);
      token && setAccessToken(token);
    },
    [setAccessToken, setDetails, setUser],
  );

  const updateUser = useCallback(
    (updatedUser: User) => {
      setUser(updatedUser);
    },
    [setUser],
  );

  const updateDetails = useCallback(
    (updatedUser: UserDetails) => {
      setDetails(updatedUser);
    },
    [setDetails],
  );

  const logout = useCallback(() => {
    storage.delete('accessToken');
    storage.delete('user');
    storage.delete('details');
  }, []);

  return (
    <SessionContext.Provider
      value={{
        accessToken,
        user,
        details,
        logout,
        saveSession,
        updateUser,
        updateDetails,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
