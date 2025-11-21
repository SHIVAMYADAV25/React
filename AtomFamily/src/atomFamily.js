import {atomFamily} from "recoil"
import { TODOS } from "./TODOS";

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default : id => {
        return TODOS.find(t => t.id === id );
    }
})

// # for each component it will create its own Atom that why called as Atomfamily