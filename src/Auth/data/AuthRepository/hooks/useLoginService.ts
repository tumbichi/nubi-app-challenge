import {useMemo} from 'react';
import AuthRepository, {IAuthRepository} from '@/Auth/data/AuthRepository';

const useLoginService = (): Pick<IAuthRepository, 'login'> => {
  const repository = useMemo(() => AuthRepository(), []);

  return {login: repository.login};
};

export default useLoginService;
