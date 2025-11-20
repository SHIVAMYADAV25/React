import {atom, selector} from "recoil";

export const CounterAtom = atom({
    default:0,
    key:"Counter"
})

export const evenSelector  = selector({
    key:"isEvenSelector",
    // pure function who will return value in same logic 
    // getter() value is derived from another value
    get: function({get}){
        // getting the value from another atom
        const currentCount = get(CounterAtom);
        return (currentCount % 2 == 0)
    }
})