import { useEffect, useState } from "react";

function UseElementOnScreen(options, containerRef) {
    const [isVisible, setIsVisible] = useState(false);
    const [isInitiallyVisible, setInitiallyVisible] = useState(false);

    const callBackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);
        const currentContainerRef = containerRef.current;
        if (containerRef.current) observer.observe(currentContainerRef);

        return () => {
            if (currentContainerRef) observer.unobserve(currentContainerRef);
        }
    }, [containerRef, options]);

    useEffect(() => {
        if (isVisible && !isInitiallyVisible) setInitiallyVisible(true);
    }, [isVisible, isInitiallyVisible]);

    return [isInitiallyVisible];
}

export default UseElementOnScreen;