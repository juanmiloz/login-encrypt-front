import axios from "axios";


export const LOGIN: string = "auth"
export const SIGN_UP: string = "auth/create"
export const USERS: string = "user"

const instance = axios.create({
    baseURL: "http://localhost:3000/"
})

export default instance

export class CRUDService {
    static getHeaderConfig() {
        const webToken =  localStorage.getItem("webToken")?localStorage.getItem("webToken"):'';

        const config = {
            headers: {Authorization: 'Bearer ' + webToken}
        };
        return config;
    }

    static decodeJWT(token:string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }

}