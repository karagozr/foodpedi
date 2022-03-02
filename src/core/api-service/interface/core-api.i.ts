import {ApiRequestType,ApiResponseType,ApiCallbackType} from '..'

export interface ICoreApi<TData>{
    request:(requestType: ApiRequestType, callbackFuncType:ApiCallbackType)=>Promise<ApiResponseType<TData>>
}