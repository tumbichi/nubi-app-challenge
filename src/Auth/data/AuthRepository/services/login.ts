import handleAxiosError from '@/Base/utils/handlers/handleAxiosError';
// import handleAxiosError from '@/Base/utils/handleAxiosError';

import authClient from '../client';
import {LoginResponse} from '..';

async function login(): Promise<LoginResponse> {
  let errorMessage;
  try {
    const response = await authClient.get<LoginResponse>('/login');
    return response.data;
  } catch (error) {
    errorMessage = handleAxiosError(error);
  }

  throw new Error(errorMessage);
}

export default login;
