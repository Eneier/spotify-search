import {useEffect} from "react";



export const useDebouncedEffect = (effect: () => void, delay: number, deps: any[]) => {
    useEffect(() => {
        const handler = setTimeout(() => {
            effect();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, deps);
};