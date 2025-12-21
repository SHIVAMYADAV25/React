import { box1 , box2 } from "./first";

const parent = () => {
    return React.createElement("div" , {id:"parents"},[box1(),box2()])
}

export {parent}