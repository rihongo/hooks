import React, {useEffect, useRef} from "react";

const useFadeIn = (duration=1) => {
    if(typeof duration !== 'number'){
        return ;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const element = useRef();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: {opacity : 0}};
}