import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist"
import {ErrorLoginType} from './error-store.i'
const { persistAtom } = recoilPersist();



export const errorLoginState = atom<ErrorLoginType>({
  key: "error-login-state",
  default : {message:"",isError:false} as ErrorLoginType,
  effects_UNSTABLE: [persistAtom]
});

export const errorLoginValue = selector<ErrorLoginType>({
  key: "error-login-state-select",
  get: ({ get }) => get(errorLoginState) as ErrorLoginType
});