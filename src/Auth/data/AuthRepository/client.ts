import Config from 'react-native-config';
import axios from 'axios';

const authClient = axios.create({
  baseURL: `${Config.API_URL}`,
});

export default authClient;
