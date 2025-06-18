import React, { ReactNode, useState, useRef, useEffect } from 'react';
import '../../styles/timeline.scss';
import Image from 'next/image';

export interface TimelineEvent {
    imageUrl: ReactNode;
    date: string;
    title: string;
    imageWidth?: number;
    imageHeight?: number;
    imageAlt?: string;
    description: string | ReactNode;
    type?: 'type1' | 'type2' | 'type3';
    customClassName?: string;
}

interface TimelineProps {
    events: TimelineEvent[];
    animated?: boolean;
    className?: string;
    dateFormat?: string;
    showDates?: boolean;
    animationDelay?: number; // delay in seconds between each event animation
}

export default function Timeline({
    events,
    animated = true,
    className = '',
    showDates = true,
    animationDelay = 0.2,
}: TimelineProps) {
    const [visibleEvents, setVisibleEvents] = useState<boolean[]>(new Array(events.length).fill(false));
    const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && animated) {
            const observers = eventRefs.current.map((ref, index) => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisibleEvents(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                            observer.disconnect();
                        }
                    },
                    {
                        threshold: 0.2
                    }
                );

                if (ref) {
                    observer.observe(ref);
                }

                return observer;
            });

            return () => {
                observers.forEach(observer => observer.disconnect());
            };
        }
    }, [animated, events.length]);

    return (
        <div className={`timeline montserrat-normal ${className}`}>
            {events.map((event, index) => (
                <div
                    key={index}
                    ref={el => eventRefs.current[index] = el}
                    className={`
                        timeline__event
                        ${event.type ? `timeline__event--${event.type}` : 'timeline__event--type1'}
                        ${event.customClassName || ''}
                        ${animated ? (visibleEvents[index] ? 'fade-in' : 'opacity-0') : ''}
                    `}
                    style={{
                        transitionDelay: `${index * animationDelay}s`
                    }}
                >
                    <div className={`timeline__event__icon -z-20 ${visibleEvents[index] ? 'opacity-in' : 'opacity-out'}`}>
                        <Image
                            src={event.imageUrl}
                            alt={event.imageAlt}
                            width={event.imageWidth}
                            height={event.imageHeight}
                            className="rounded-lg"
                        />
                    </div>
                    
                    {showDates && (
                        <div className="timeline__event__date">
                            {event.date}
                        </div>
                    )}

                    <div className="timeline__event__content">
                        <div className="timeline__event__title montserrat-bold">
                            {event.title}
                        </div>
                        <div className="timeline__event__description montserrat-normal">
                            {typeof event.description === 'string' ? (
                                <p>{event.description}</p>
                            ) : (
                                event.description
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
