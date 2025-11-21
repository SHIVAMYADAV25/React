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