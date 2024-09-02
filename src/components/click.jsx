import { useState } from "react";

export default function ClickCounter() {
    const [count, setCount] = useState(0);
    
    function handleClick () {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            <h3>
            You clicked { count } times
            </h3>            
        </button>
    )
}