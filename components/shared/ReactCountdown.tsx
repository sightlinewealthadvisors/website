import React, { useState, useEffect,useRef } from 'react';
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
    type = 'number',
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const finalValue = typeof value === 'string' ? parseInt(value, 10) : value;

    // Add intersection observer
    useEffect(() => {
        if (typeof window !== 'undefined' && animate) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.1
                }
            );

            if (componentRef.current) {
                observer.observe(componentRef.current);
            }

            return () => {
                observer.disconnect();
            };
        }
    }, [animate]);

    // Modified animation effect to consider visibility
    useEffect(() => {
        if (animate && isVisible && !isNaN(finalValue)) {
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
        } else if (!animate) {
            setCount(finalValue);
        }
    }, [finalValue, animate, duration, isVisible]);

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

    return (
        <div 
            ref={componentRef}
            className={`neuton-regular flex flex-col items-center text-center ${className}`}
        >
            <div className="flex items-baseline justify-center">
                {prefix && <span className="mr-1">{prefix}</span>}
                {animate ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration }}
                        className={`text-6xl font-bold ${valueClassName}`}
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