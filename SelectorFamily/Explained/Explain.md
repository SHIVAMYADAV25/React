## Selector Family

# when ever u are required data from any API endpoint which is in mass
# us the Selector family
# using the combination of AtomFamily and SelectorFamily it will be easy to do 

diff btw atomFamily and selectorFamiy and Async data Query

# selectorFamily

import {atomFamily, selectorFamily } from "recoil"

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",

    - use of SelectorFamily in AtomFamily

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

# AtomFamily

import {atomFamily} from "recoil"
import { TODOS } from "./TODOS";

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default : id => {
        return TODOS.find(t => t.id === id );
    }
})

# much more easier then async data Query

import axios from "axios";
import {atom , selector} from "recoil";

export const notifications = atom({
    key:"networkAtom",
    default : selector({
        key:"newtorkAtomSelector",
        get : async()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get : ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network +
        allNotification.jobs +
        allNotification.notifications +
        allNotification.messaging
    }
})