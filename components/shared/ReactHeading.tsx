import React from 'react';

interface ReactHeadingProps {
    title: string;
    description?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    containerClassName?: string;
    titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    descriptionSize?: 'sm' | 'md' | 'lg';
    align?: 'left' | 'center' | 'right';
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: 'default' | 'primary' | 'secondary';
    withDivider?: boolean;
}

const ReactHeading: React.FC<ReactHeadingProps> = ({
    title,
    description,
    titleClassName = '',
    descriptionClassName = '',
    containerClassName = '',
    titleSize = 'lg',
    descriptionSize = 'md',
    align = 'center',
    titleAs: HeadingTag = 'h2',
    color = 'default',
    withDivider = false,
}) => {
    const titleSizeClasses = {
        sm: 'text-xl font-semibold',
        md: 'text-2xl font-semibold',
        lg: 'text-3xl font-bold',
        xl: 'text-4xl font-bold',
        '2xl': 'text-5xl font-bold',
    };

    const descriptionSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    const colorClasses = {
        default: 'text-gray-900 ',
        primary: 'text-blue-600 ',
        secondary: 'text-purple-600 ',
    };

    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <div
            className={` montserrat-regular w-full mx-auto px-4 py-12 ${alignClasses[align]} ${containerClassName}`}
        >
            <HeadingTag
                className={`${titleSizeClasses[titleSize]} ${colorClasses[color]} mb-4 ${titleClassName}`}
            >
                {title}
            </HeadingTag>
            
            {withDivider && (
                <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded-full" />
            )}

            {description && (
                <p
                    className={`${descriptionSizeClasses[descriptionSize]} text-center whitespace-pre-wrap
 text-gray-600 ${descriptionClassName}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default ReactHeading;
