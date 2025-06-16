import Link from "next/link";
import React from "react";
import { ReactButton } from "./ReactButton.tsx";
type HeaderProps = {
  title: string;
  className?: string;
  title2?: string;
  subtitle?: string;
  buttons?: ReactButton[];
};

export default function Header({
  title,
  title2,
  subtitle,
  className,
  buttons,
}: HeaderProps) {
  return (    
    <header className={` ${className}  min-h-[800px] max-w-8xl neuton-regular  mx-auto flex 
    flex-col md:flex-row py-10 gap-8 px-4 lg:px-8`}>
      <div className="flex justify-center flex-col">
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
            className="text-2xl text-gray-500 max-w-2xl mt-4"
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
      <div className="flex flex-col "><div class="banner">
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <div class="panel">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
</div>
</div>
    </header>
  );
}
