import {useState, useEffect} from 'react'

const useTimer = () => {
    // hooks useState
    const [countdown, setCountdown] = useState(30)

    // method reset
    const reset = () => {
        setCountdown(e => 30)
    }

    // hooks useEffect yang akan merender setiap 1 s
    useEffect(() => {
        const endtime = setInterval(() => {
                setCountdown(countdown => countdown - 1);
            }, 1000);
        return () => clearInterval(endtime);
    }, []);
    return {countdown, reset}
}

export default useTimer