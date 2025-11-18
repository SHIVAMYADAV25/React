import { useEffect, useRef} from "react";

export function usePrev(num) {
    let value = useRef();
    console.log("Starting of the code")

    useEffect(() => {
        console.log("code inside the Use effect")
        value.current = num;
    },[num]);

    console.log("code while returning the value")
    return value.current;
}

// flow of the program
    // Starting of the code
    // code while returning the value
    // code inside the Use effec
    
// onClick of the button the new ref is created 
// then it return the value of ref which is undefined
// after that the useEffect runs and store the value of useRef (but it does not re-render the page so the updated value is not shown there);
