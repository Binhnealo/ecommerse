    import React, { useState, useEffect } from "react";
    
    const CountdownTimer = ({ targetTime }) => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetTime) - new Date();
            let timeLeft = {};
            
            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };
        
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft()); 
        }, 1000);

        return () => clearInterval(timer);
    });
    const formatNumber = (number) => {
        return String(number).padStart(2, "0");
    };

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
        timerComponents.push(
            <span key={interval} className="bg-white flex p-[10px] gap-[5px] rounded-[3px] m-[5px] ">
            {formatNumber(timeLeft[interval])} <span className="text-secondaryColor ">{interval}</span>{' '}
            </span>
        );
        }
    });
    return timerComponents;
    };

    export default CountdownTimer;
