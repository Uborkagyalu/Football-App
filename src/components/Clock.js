import React, { useState, useEffect } from 'react';

const Clock = (props) => {

    const [time, setTime] = useState("00:00:00");

    const counting = () => {
        let now = new Date();
        let matchTime = new Date(props.utc);
        let diff = now - matchTime;

        if (now < matchTime) return "00:00:00";

        return diff.toLocaleTimeString();
    }

    useEffect(() => {
        let clockInt = null;
        if (props.match.match.status !== 'FINISHED') {
            clockInt = setInterval(() => {
                setTime(counting());
            }, 1000);
        }
        return () => clearInterval(clockInt);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='clock'>{time}</div>
    );
}

export default Clock;
