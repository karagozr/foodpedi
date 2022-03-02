import axios from 'axios'

import {ICoreApi} from '..'
import { ApiRequestType, ApiCallbackType, ApiResponseType,RequestEnum } from '../type';



const BASE_URL="https://localhost:44322/";

export class CoreApiAxios<TData> implements ICoreApi<TData>{
    public request = async (requestType: ApiRequestType, callbackFuncType: ApiCallbackType | any) => {
        

        console.log("API : ",requestType)

        let result : ApiResponseType<TData> = {data:null,status:0,message:"",success:false};

        const load = (isLoad:boolean,message:string,successCode:string) => callbackFuncType.load({isLoad,message,successCode});
        const redirect = (isError:boolean,message:string,status:number) => callbackFuncType.redirect({isError,status,message})

        let axiosConfig = {
            method: requestType.type,
            url: requestType.url,
            baseURL:BASE_URL,
            params:requestType.type===RequestEnum.get?requestType.data:null,
            data:requestType.type!==RequestEnum.get?requestType.data:null,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Headers":"origin, content-type, accept, authorization",
                //'Access-Control-Allow-Private-Network': true,
                "Content-Type":"application/json; charset=utf-8",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
                "Authorization": `Bearer ${requestType.token}`
            }
        }


        try {
            load( true, 'Request start','waiting');
            const { data, status } = await axios(axiosConfig);

            switch (status) {
                case 200:
                    result = { data: data, message: 'Success', success: true ,status}
                    break;
                case 201:
                    result = { data: data, message: 'Success', success: true ,status}
                    break;
                case 204:
                    result = { data: data, message: 'Login Error', success: false ,status}
                    break;
                default:
                    result = { data: data, message: 'Other Code', success: false ,status}
                    break;
            }
            load( false, 'Request finish', 'success');
            return result;

        } catch (error:any) {
            const status = error.response ? error.response.status:null        
            switch (status) {
                case 400:
                    result = { data: null, message: `${status} - Bad Request. Message : ${error.response?.data}`, success: false,status }
                    break;
                case 401:
                    result = { data: null, message: `${status} - Unauthorized`, success: false ,status}
                    redirect(true,"Unauthorized - Oturum kapalı",401)
                    break;
                case 403:
                    result = { data: null, message: `${status} - Forbidden`, success: false ,status}
                    redirect(true,"Forbidden - İstenilen yere yetki yok",403)
                    break;
                case 404:
                    result = { data: null, message: `${status} - Page Not Found`, success: false ,status}
                    break;
                case 408:
                    result = { data: null, message: `${status} - Timeout Error`, success: false ,status}
                    break;
                case 409:
                    result = { data: null, message: `${status} - Record already exist`, success: false ,status}
                    break;
                default:
                    result = { data: null, message: 'Network Error', success: false ,status}
                    break;
            }

        }

        load( false, 'Request finish', 'success');

        return result;

    };
  
}