import Link from "next/link";
import React from "react";
import { ReactButton } from "./ReactButton.tsx";
type HeaderProps = {
  title: string;
  className?: string;
  title2?: string;
  subtitle?: string;
  buttons?: ReactButton[];
  right_component?: React.ReactNode;
};

export default function Header({
  title,
  title2,
  subtitle,
  right_component,
  className,
  buttons,
}: HeaderProps) {
  return (
    <header
      className={` ${className} ${
        className?.includes("-h-") ? "min-h-screen" : ""
      } opacity-in md:max-w-7xl  items-center montserrat-regular  mx-auto flex 
    flex-col md:flex-row py-10 gap-y-8 md:gap-8 px-4 lg:px-12`}
    >
      <div className="flex w-full justify-center flex-col">
        <div className="relative w-fit">
          <h1 className="text-5xl  sm:text-5xl font-bold text-foreground">
            {title}
          </h1>
          {title2 && (
            <h2 className="text-5xl sm:text-5xl font-bold text-foreground mt-4">
              {title2}
            </h2>
          )}
        </div>
        {subtitle && (
          <p
            className="text-2xl text-gray-300 max-w-2xl mt-4"
            style={{ animationDelay: "0.15s" }}
          >
            {subtitle}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex gap-3 mt-8">
            {buttons.map((button, index) =>
              button ? (
                <ReactButton
                  type={button.type || "dark"}
                  href={button.href || "#"}
                  key={index}
                >
                  {button.title || "Button"}
                </ReactButton>
              ) : null
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col w-full md:w-1/2">{right_component}</div>
    </header>
  );
}
