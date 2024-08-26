import {useCallback, useEffect, useRef} from "react";

export default function useThrottle(callback, delay) {
    const isThrottling = useRef();

    const throttlingCallback = useCallback((... args) => {
        if (isThrottling.current){
            return
        }
        callback(...args)
        isThrottling.current = true
        setTimeout(() => isThrottling.current = false, delay)
    }, [callback, delay])

    return throttlingCallback;
}