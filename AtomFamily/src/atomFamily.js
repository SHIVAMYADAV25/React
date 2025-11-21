import {atomFamily} from "recoil"
import { TODOS } from "./TODOS";

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default : id => {
        return TODOS.find(t => t.id === id );
    }
})