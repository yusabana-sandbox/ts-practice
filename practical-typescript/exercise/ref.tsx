import {render} from "react-dom";
import React, {useEffect, useRef} from "react";


const Component = () => {
    const ref = useRef<null | HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current === null) return
        const size = ref.current.getBoundingClientRect()
        console.log(size)
    })

    return (
        <div>
            <div ref={ref} style={{width: 1000, height: 100}}>aa</div>
        </div>
    )
}

render(<Component/>, document.getElementById('app'));
