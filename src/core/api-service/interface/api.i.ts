import {ApiRequestBaseType,ApiResponseType,ApiCallbackType} from '..'

export interface IApi<TData>{

    get : (request:ApiRequestBaseType, callback :ApiCallbackType) => Promise<ApiResponseType<TData>>;

    post : (request:ApiRequestBaseType, callback :ApiCallbackType) => Promise<ApiResponseType<TData>>;

    put : (request:ApiRequestBaseType, callback :ApiCallbackType) => Promise<ApiResponseType<TData>>;

    remove : (request:ApiRequestBaseType, callback :ApiCallbackType) => Promise<ApiResponseType<TData>>;

    patch : (request:ApiRequestBaseType, callback :ApiCallbackType) => Promise<ApiResponseType<TData>>;

}