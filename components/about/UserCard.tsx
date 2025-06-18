import React from 'react'
import "../../styles/usercard.scss"
import Link from 'next/link'
interface UserCardProps {
    imageUrl: string;
    imageAlt?: string;
    name: string;
    title?: string;
    description: string;
    socialLinks?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        email?: string;
    };
    className?: string;
    imageClassName?: string;
    textClassName?: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    layout?: 'horizontal' | 'vertical';
}

export default function UserCard({
    imageUrl,
    imageAlt = '',
    name,
    title,
    description,
    socialLinks,
    className = '',
    imageClassName = '',
    textClassName = '',
    onClick,
    size = 'medium',
    layout = 'horizontal'
}: UserCardProps) {
    return (
        <div 
            className={`flex text-white  flex-col w-full justify-center items-center pt-12 ${size} ${layout} ${className}`}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
        >
            <div className="cta">
                <img 
                    src={imageUrl} 
                    alt={imageAlt} 
                    className={imageClassName}
                />
                <div className={`text backdrop-blur-2xl ${textClassName}`}>
                    <h2 className="montserrat-bold">{name}</h2>
                    {title && <h3 className="text-[#63a6ca] montserrat-bold">{title}</h3>}
                    <p className="text-sm">{description}</p>
                    
                    {socialLinks && (
                        <div className="mb-2 mt-4 text-sm montserrat-regular">
                            {socialLinks.linkedin && (
                                <Link className="bg-cyan-800 hover:bg-cyan-800 py-2 px-4" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                            )}
                            {socialLinks.twitter && (
                                <Link className="bg-cyan-800 hover:bg-cyan-800 py-2 px-4" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</Link>
                            )}
                            {socialLinks.github && (
                                <Link className="bg-cyan-800 hover:bg-cyan-800 py-2 px-4" href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
                            )}
                            {socialLinks.email && (
                                <Link className="bg-cyan-800 hover:bg-cyan-800 py-2 px-4" href={`mailto:${socialLinks.email}`}>Email</Link>
                            )}

                            {socialLinks.login && (
                                <Link className="bg-cyan-800 hover:bg-cyan-800 py-2 px-4" href={`${socialLinks.email}`}>Login</Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
