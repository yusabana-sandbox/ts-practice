import React, {useEffect, useState} from "react";
import {render} from "react-dom";

const Component: React.FC = () => {
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log(`aaa: ${count}`)
        const interval = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        return () => clearInterval(interval)
    })

    return <div>{`Count: ${count}`}</div>
}

render(<Component/>, document.getElementById('app'));
