import { useEffect, useState } from "react";

type UseElementOnScreenProps = {
    options: {
        threshold: number;
    };
    containerRef: React.RefObject<HTMLDivElement>;
}

const UseElementOnScreen = ({options, containerRef}: UseElementOnScreenProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInitiallyVisible, setInitiallyVisible] = useState(false);

    const callBackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);
        const currentContainerRef = containerRef.current;
        if (currentContainerRef) observer.observe(currentContainerRef);

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