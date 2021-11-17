import { useState } from "react";
const Count = () =>{
    const [count, setCount] = useState(0);


    return (
        <div>
            <h2>Count:</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Add</button>
            <button onClick={() => setCount(count-1)}>Reduce</button>
            <button onClick={() => setCount(count*2)}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>
        
        </div>
    )
}

export default Count;