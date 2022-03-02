import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist"
import {UserStateType} from './user-store.i'
const { persistAtom } = recoilPersist();



export const userState = atom<UserStateType>({
  key: "user-state",
  default : {token:""} as UserStateType,
  effects_UNSTABLE: [persistAtom]
});

export const userValue = selector<UserStateType>({
  key: "user-state-select",
  get: ({ get }) => get(userState) as UserStateType
});