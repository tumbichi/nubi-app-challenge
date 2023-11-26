import login from './services/login';

export interface User {
  email: string;
  password: string;
  name: string;
  lastName: string;
}

export interface UserDetails {
  services: string[];
  navigation: string[];
  movements: Movement[];
  cardData: CardData[];
  summary: Summary[];
}

export type LoginResponse = User & UserDetails;

export interface CardData {
  account_number: string;
  has_active_pin: boolean;
  kind: string;
  first_name: string;
  last_name: string;
  expiration_date: string;
  last_four_digits: string;
  all_digits: string;
  balance: string;
  status: string;
}

export interface Movement {
  title: string;
  'amount ': string;
  date: string;
}

export interface Summary {
  title: string;
  amount: string;
}

export interface IAuthRepository {
  login: () => Promise<LoginResponse>;
}

const AuthRepository = (): IAuthRepository => ({
  login,
});

export default AuthRepository;
