import React, {useEffect, useState} from "react";


export const useScroll = () => {
    const [status, setStatus] = useState({
        x:0,
        y:0
    });
    const onScroll = (event) => {
        setStatus({y:window.scrollY, x: window.scrollX});
    };

    useEffect(()=> {
        window.addEventListener("scroll",onscroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    return status;
}