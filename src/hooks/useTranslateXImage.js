import { useEffect, useState } from 'react';
import useScrollHandling from './useScrollHandling';

const useTransLateXImage = () =>{
const {scrollPosition, scrollDirection } = useScrollHandling();

    
    const [translateXPosition, setTranslateXPosition] = useState(80);
    
    
    const handlScroll = () => {
        if (scrollDirection === "down" && scrollPosition >= 1810) {
        setTranslateXPosition(
            translateXPosition <= 0 ? 0 : translateXPosition - 80
        );
        } else if (scrollDirection === "up") {
        setTranslateXPosition(
            translateXPosition >= 80 ? 80 : translateXPosition + 80
        );
        }
    };
    
    useEffect(() => {
        handlScroll();
    }, [scrollPosition]);

    return{
        translateXPosition
    }
}
export default useTransLateXImage;