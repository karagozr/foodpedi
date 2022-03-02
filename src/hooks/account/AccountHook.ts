import {useNavigate} from 'react-router-dom'
import { useRecoilCallback,useRecoilValue } from 'recoil';
import { userValue,userState, errorLoginState,errorLoginValue} from '../../core'
import {useApiRequest} from "../../core"
import jwtDecode from 'jwt-decode'

const BASE_URL = "auth/";
const LOGIN_URL = "login";
const REGISTER_URL = "register";

type LoginType={
    userName:string,
    password:string
}

export const useAccount = () => {

    const navigate = useNavigate();
    const request = useApiRequest();
    const user = useRecoilValue(userValue);

    const setUser = useRecoilCallback(({ set }) => (data:any) => {
        set(userState,data);
    });

    const setError = useRecoilCallback(({ set }) => ({message,isError}) => {
        set(errorLoginState,{message,isError});
    });

    const Login = async ({userName,password}:LoginType) =>{
    
        var result = await request.post({userName,password},"auth/login");
        if(result.status === 200){
            var decodedToken = jwtDecode<any>(result.data.token);
            var _userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
            setUser({username:_userName,token:result.data.token,fullname:decodedToken.Fullname,userType: decodedToken.aud})
            navigate('/home');
        }else if(result.status === 404){
            setError({isError:true,message:"User Not Found"});
        }else{
            setError({isError:true,message:"Server Error"})
        }
        
    }

    const logOut = async () =>{
    
        setUser(null);
        navigate('/home');
        
    }
    

    const register = async (data:any) =>{
    
        console.log('data user : ', data);
        var result = await request.post(data,BASE_URL+REGISTER_URL);
        if(result.status === 200){
            navigate('/login');
        }else{
            setError({isError:true,message:"Server Error"})
        }
    }

    return {Login,register,logOut,user};

}