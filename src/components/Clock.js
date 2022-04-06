import React, { useState, useEffect } from 'react';

const Clock = (props) => {

    const [time, setTime] = useState("00:00");

    const counting = () => {
        let now = new Date();
        let matchTime = new Date(props.utc);

        let diff = (now - matchTime) / 1000;

        if (now < matchTime) return "00:00";

        let time = "";

        let minute = Math.floor(diff / 60);
        if (minute < 10) time = "0" + String(minute);
        else time = String(minute);

        let second = Math.floor(diff % 60);
        if (second < 10) time += ":0" + String(second);
        else time += ":" + String(second);

        return time;
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
