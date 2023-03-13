import React, { useState, useEffect } from 'react'
const Example = () => {
    const [ctime, setTime] = useState(new Date())
    const Timer = () => {
      return
        (setTime(new Date()));
    }
    useEffect(() => { setInterval(Timer, 1000) })
    return (
        <div>
            <button onClick={Timer.toLocalTimeString()}>start</button>
        </div>
    )
};
export default Example