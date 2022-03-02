export enum RequestEnum {
    get = 'get',
    post = 'post',
    put = 'put',
    patch = 'patch',
    delete = 'delete'
}

export type ApiRequestBaseType = {
    token?:string,
    url:string,
    data?:any,
}

export type ApiRequestType = ApiRequestBaseType & {
    type:RequestEnum,
}

export type ApiResponseType<TData> = {
    success:boolean,
    status:number,
    message?:string,
    data?:TData|any
}

/**
 * Data loading callback function type
 */
export type ApiLoadingCallbackType = {
    isLoad:boolean,
    successCode?:string,
    message?:string
}
/**
 * if need redirect after api response, use this callback function type
 */
export type ApiRedirectCallbackType = {
    isError:boolean,
    status:number,
    message?:string
}
/**
 * Callback type for api request. If want to run callback func during api request, callback func return these types
 */
export type ApiCallbackType = {
    load? : (value:ApiLoadingCallbackType) => void,
    redirect? : (value:ApiRedirectCallbackType) => void
}