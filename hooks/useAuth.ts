import {User} from '@/types/user';
import axios from '../config/axios';
import {jwtDecode} from 'jwt-decode';
import {Login} from "@/interfaces/login.interface";

const useAuth = () => {
  const validateUser = async (
    userData: Login
  ): Promise<User> => {
    const data: string = await axios.post('auth', userData).then((res)=>{
      if(res.status===200){
        localStorage.setItem("webToken",(res.data.token)?res.data.token:'')
        return res.data.token
      }
    });
    const user: User = jwtDecode(data);
    user.isAdmin = (user.roleName === "admin");
    console.log(user)
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
