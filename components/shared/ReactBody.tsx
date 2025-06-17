import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface BodyProps {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
    layout?: 'text-left' | 'text-right';
    titleClassName?: string;
    descriptionClassName?: string;
    containerClassName?: string;
    imageClassName?: string;
    contentWidth?: string;
    imageWidth?: number;
    imageHeight?: number;
    backgroundColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    showDivider?: boolean;
    callToAction?: React.ReactNode;
    animate?: boolean;
}

const ReactBody: React.FC<BodyProps> = ({
    title,
    description,
    imageUrl,
    layout = 'text-left',
    titleClassName = '',
    descriptionClassName = '',
    containerClassName = '',
    imageClassName = '',
    contentWidth = 'max-w-7xl',
    imageAlt = '',
    imageWidth = 600,
    imageHeight = 400,
    backgroundColor = 'bg-white',
    titleColor = 'text-gray-900',
    descriptionColor = 'text-gray-600',
    showDivider = false,
    callToAction,
    animate = false,
}) => {
const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const contentOrder = layout === 'text-left' ? 'order-1' : 'order-2';
    const imageOrder = layout === 'text-left' ? 'order-2' : 'order-1';

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
    const animationClass = animate && isVisible ? 'fade-in' : 'opacity-0';
    const imageAnimationClass = animate && isVisible ? 'fade-in floating' : 'opacity-0';

    return (
        <section 
            ref={componentRef}
            className={`montserrat-regular  py-16 ${backgroundColor} ${containerClassName}`}
        >
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${contentWidth}`}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className={`lg:w-full ${contentOrder}`}>
                        <h2 
                            className={`text-3xl md:text-4xl font-bold ${titleColor} ${titleClassName} ${animationClass}`}
                        >
                            {title}
                        </h2>
                        {showDivider && (
                            <div className={`w-20 h-1 bg-[#63a6ca] my-6 ${animationClass}`} />
                        )}
                        <p 
                            className={`mt-4 text-lg ${descriptionColor} ${descriptionClassName} ${animationClass}`}
                        >
                            {description}
                        </p>
                        {callToAction && (
                            <div className={`mt-8 ${animationClass}`}>
                                {callToAction}
                            </div>
                        )}
                    </div>
                    
                    {imageUrl && (
                        <div className={`lg:w-1/2 ${imageOrder}`}>
                            <div className={`relative ${imageClassName}`}>
                                <Image
                                    src={imageUrl}
                                    alt={imageAlt}
                                    width={imageWidth}
                                    height={imageHeight}
                                    className={`rounded-lg  ${imageAnimationClass}`}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReactBody;