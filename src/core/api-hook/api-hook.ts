import React from 'react';
import { useRecoilCallback,useRecoilValue } from 'recoil';

import { loadState,userState } from './store'

import { Api ,ApiResponseType, ApiLoadingCallbackType, ApiRedirectCallbackType} from '../api-service'


export const useApiRequest = () => {
    
    
    const user  = useRecoilValue(userState);

    const setLoad = useRecoilCallback(({ set }) => (value:boolean) => {
        set(loadState,value);
    });
    
    const apiCallBackLoad= (value:ApiLoadingCallbackType) =>{
        setLoad(value.isLoad);
    }

    const apiCallBackRedirect= (value:ApiRedirectCallbackType) =>{
        
    }
    
    const get       = async <TData>(data:any, url:string) : Promise<ApiResponseType<TData>> => { 
        const api = new Api<TData>();
        return await api.get({data:data,token:user.token,url:url},{load:apiCallBackLoad,redirect:apiCallBackRedirect}); 
    }

    const post      = async <TData>(data:any, url:string) : Promise<ApiResponseType<TData>> => { 
        const api = new Api<TData>();
        return await api.post({data:data,token:user.token,url:url},{load:apiCallBackLoad,redirect:apiCallBackRedirect}); 
    }

    const patch     = async <TData>(data:any, url:string) : Promise<ApiResponseType<TData>> => { 
        const api = new Api<TData>();
        return await api.patch({data:data,token:user.token,url:url},{load:apiCallBackLoad,redirect:apiCallBackRedirect}); 
    }

    const put       = async <TData>(data:any, url:string) : Promise<ApiResponseType<TData>> => { 
        const api = new Api<TData>();
        return await api.put({data:data,token:user.token,url:url},{load:apiCallBackLoad,redirect:apiCallBackRedirect}); 
    }

    const remove    = async <TData>(data:any, url:string) : Promise<ApiResponseType<TData>> => { 
        const api = new Api<TData>();
        return await api.remove({data:data,token:user.token,url:url},{load:apiCallBackLoad,redirect:apiCallBackRedirect}); 
    }

    return { get, post ,patch ,put ,remove }
}