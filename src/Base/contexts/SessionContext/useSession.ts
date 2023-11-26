import {useContext} from 'react';
import SessionContext from './SessionContext';

const useSession = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
};

export default useSession;
