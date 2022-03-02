import {IApi} from '..'
import { ApiRequestBaseType, ApiCallbackType, ApiResponseType,RequestEnum  } from '../type';
import { ICoreApi  } from '../interface';
import {CoreApiAxios} from './core-api-axios'

export class Api<TData> implements IApi<TData>{
    
    private coreApi : ICoreApi<TData>;

    constructor(){
        this.coreApi = new CoreApiAxios<TData>();
    }

    public get       = async (request:ApiRequestBaseType, callback :ApiCallbackType) =>
        await this.coreApi.request({data:request.data,token:request.token,type:RequestEnum.get,url:request.url},callback);
 
    public post      = async (request:ApiRequestBaseType, callback :ApiCallbackType) => 
        await this.coreApi.request({data:request.data,token:request.token,type:RequestEnum.post,url:request.url},callback);
 
    public put       = async (request:ApiRequestBaseType, callback :ApiCallbackType) =>
        await this.coreApi.request({data:request.data,token:request.token,type:RequestEnum.put,url:request.url},callback);
 
    public remove    = async (request:ApiRequestBaseType, callback :ApiCallbackType) =>
        await this.coreApi.request({data:request.data,token:request.token,type:RequestEnum.delete,url:request.url},callback);
 
    public patch     = async (request:ApiRequestBaseType, callback :ApiCallbackType) =>
        await this.coreApi.request({data:request.data,token:request.token,type:RequestEnum.patch,url:request.url},callback);

}