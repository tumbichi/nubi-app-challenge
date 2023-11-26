import {isAxiosError} from 'axios';
import {storage} from '../../contexts/SessionContext/SessionProvider';

interface BaseError {
  message: string;
  statusCode: number;
}

export default function handleAxiosError(error: unknown): string {
  if (isAxiosError<BaseError>(error)) {
    console.log('handleAxiosError :>> ', error);
    if (
      error.response?.data.statusCode === 401 ||
      error.response?.data.message === 'Unauthorized'
    ) {
      // Logout
      storage.delete('accessToken');
      storage.delete('user');
    }
    return error.response?.data.message
      ? error.response?.data.message
      : error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Error inesperado, intente nuevamente mas tarde';
}
