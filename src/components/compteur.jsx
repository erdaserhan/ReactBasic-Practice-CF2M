import { useState } from 'react';


export default function Compteur() {  
    const [count, setCount] = useState(0);
    return (
       <h1> { count }</h1>
    )
}