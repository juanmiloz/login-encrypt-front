import { User } from '@/types/user';
import axios from '../config/axios';
import { jwtDecode } from 'jwt-decode';

const useAuth = () => {
  const validateUser = async (
    username: string,
    password: string
  ): Promise<User> => {
    const res = await axios.post('auth', { username, password });
    const user: User = jwtDecode(res.data);
    return user;
  };

  const createUser = async (
    username: string,
    password: string
  ): Promise<User> => {
    const res = await axios.post('auth/create', { username, password });
    const user: User = jwtDecode(res.data);
    return user;
  };

  return { validateUser, createUser };
};

export default useAuth;
