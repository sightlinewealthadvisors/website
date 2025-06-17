import React from "react";
import Link from "next/link";

type ButtonType = "primary" | "dark" | "gold";

interface ButtonProps {
    type?: ButtonType;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

const baseStyles =
    "px-7 py-2.5 text-lg rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const typeStyles: Record<ButtonType, string> = {
    primary: "bg-blue-600  montserrat-bold text-white hover:bg-blue-700",
    dark: " bg-opacity-30 bg-cyan-800 backdrop-blur-xl montserrat-bold text-white hover:bg-cyan-800",
    gold: "bg-[#ffce2d] montserrat-bold text-white hover:bg-yellow-400",
};

export const ReactButton: React.FC<ButtonProps> = ({
    type = "primary",
    href,
    onClick,
    children,
    className = "",
    ...rest
}) => {
    const styles = `${baseStyles} ${typeStyles[type]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={styles} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default ReactButton;