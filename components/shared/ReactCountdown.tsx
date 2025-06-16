import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
    value: number | string;
    prefix?: string;
    suffix?: string;
    title: string;
    footnote?: string;
    animate?: boolean;
    className?: string;
    valueClassName?: string;
    titleClassName?: string;
    duration?: number;
    type?: 'dollar' | 'number' | 'rate'; // Add new type prop
}

const ReactCountdown: React.FC<CountdownProps> = ({
    value,
    prefix = '',
    suffix = '',
    title,
    footnote,
    animate = true,
    className = '',
    valueClassName = '',
    titleClassName = '',
    duration = 2,
    type = 'number', // Default type is number
}) => {
    const [count, setCount] = useState(0);
    const finalValue = typeof value === 'string' ? parseInt(value, 10) : value;

    // Helper function to format the display value
    const getFormattedValue = (val: number | string) => {
        switch (type) {
            case 'dollar-billion':
                return `$${val}B+`;
            case 'dollar-million':
                return `$${val}M+`;
            case 'rate':
                return `${val}%`;
            case 'number':
                return `${val}+`;
            default:
                return val;
        }
    };

    useEffect(() => {
        if (animate && !isNaN(finalValue)) {
            const steps = 30;
            const increment = finalValue / steps;
            const stepDuration = (duration * 1000) / steps;

            let currentCount = 0;
            const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount >= finalValue) {
                    setCount(finalValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(currentCount));
                }
            }, stepDuration);

            return () => clearInterval(timer);
        } else {
            setCount(finalValue);
        }
    }, [finalValue, animate, duration]);

    return (
        <div className={`neuton-regular flex flex-col items-center text-center ${className}`}>
            <div className="flex items-baseline justify-center">
                {prefix && <span className="mr-1">{prefix}</span>}
                {animate ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration }}
                        className={`text-6xl  font-bold ${valueClassName}`}
                    >
                        {isNaN(finalValue) ? value : getFormattedValue(count)}
                    </motion.div>
                ) : (
                    <div className={`text-6xl font-bold ${valueClassName}`}>
                        {getFormattedValue(value)}
                    </div>
                )}
                {suffix && <span className="ml-1">{suffix}</span>}
            </div>
            
            <div className={`mt-2 space-y-1 ${titleClassName}`}>
                {title && (
                    <h3 className="text-lg text-black font-medium">
                        {title}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default ReactCountdown;