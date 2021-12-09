import React, { useState } from 'react';

function Range() {
    const [state, setState] = useState(0)

    const onChange = (event) => {
        let position = event.target.value
        setState(position)
    }

    return (
        <div>
            <input type='range' step='1' onChange={onChange} />
            <input value={state} disabled />
        </div>
        )
}

export default Range;