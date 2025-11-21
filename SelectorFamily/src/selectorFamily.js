import {atomFamily, selectorFamily } from "recoil"

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default : selectorFamily({
        key:"todoSelectorFamily",
        get:(id) => {
            async({get}) => {
            const res = await axios.get(`URL for todo/${id}`);
            return res.data.todo;
            }
        },
    })
})