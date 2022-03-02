import { atom, selector } from "recoil";


export const loadState = atom({
  key: "load-state",
  default: false as boolean
});

export const loadValue = selector({
  key: "load-state-select",
  get: ({ get }) => get(loadState) as boolean
});