const gradient = "text-primary";
const gradient_dark = "dark:text-blue-600";
const gradient_dark_alt = "dark:from-blue-300 dark:via-blue-500 dark:to-primary";
const gradient_cool = "bg-gradient-to-b from-primary to-blue-300 dark:to-blue-500 bg-primary flex";
/*

const gradient = "bg-gradient-to-r from-primary via-secondary to-secondary";
const gradient_dark = "dark:from-secondary dark:via-purple-500 dark:to-purple-300";

*/

import NextImage from "next/image";
import NextLink from "next/link";

export function Container({ children , size}) {
  return (
    <div className={`container mx-auto px-4 ${size}`}>
      {children}
    </div>
  );
}
Container.defaultProps = {
  size: "max-w-3xl",
};


export function Subline({ children }) {
  return (
    <div className="sm:text-lg dark:text-gray-100">
      {children}
    </div>
  );
}

export function InlineHeading({ children }) {
  return (
    <h1 className={`inline-block bg-clip-text ${gradient} ${gradient_dark}`}>
      {children} 
    </h1>
  );
}
export function Heading({ children }) {
  return (
    <h1 className={`inline-block text-2xl sm:text-3xl md:text-4xl font-heading bg-clip-text ${gradient} dark:text-white`}>
      {children} 
    </h1>
  );
}

export function Headline({ children }) {
  return (
    <div className="text-xl sm:text-2xl md:text-3xl leading-normal font-heading">
      {children}
    </div>
  );
}

export function Homelink() {
  return (
    <NextLink href="/" passHref>
      <a className="flex items-center hover:underline">
        <div className="icon">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15625 13.8125L8.78125 13.2188C8.9375 13.0625 8.9375 12.8125 8.78125 12.6875L3.9375 7.8125H14.625C14.8125 7.8125 15 7.65625 15 7.4375V6.5625C15 6.375 14.8125 6.1875 14.625 6.1875H3.9375L8.78125 1.34375C8.9375 1.21875 8.9375 0.96875 8.78125 0.8125L8.15625 0.21875C8.03125 0.0625 7.78125 0.0625 7.625 0.21875L1.09375 6.75C0.9375 6.90625 0.9375 7.125 1.09375 7.28125L7.625 13.8125C7.78125 13.9688 8.03125 13.9688 8.15625 13.8125Z"/>
          </svg>
        </div>
        <div className="pl-4 font-bold">
          Philipp Reiner
        </div>
      </a>
  </NextLink>
  );
}


export function Minilogo({name}) {
  return (
    <div className="inline-block mr-0.5 transform translate-y-0.5">
      <NextImage
        width="18"
        height="18"
        src={`/static/${name}.png`}
        alt="PlanB. GmbH"
        className="object-scale-down rounded"
      />
    </div>
  );
}

export function LanguagePill({ label }) {
  return (
  <span className="bg-gray-200 uppercase dark:bg-gray-700 inline-block text-gray-600 dark:text-gray-400 rounded-sm py-0.5 mr-1 px-1 transform -translate-y-0.5 text-xs">
    {label}
  </span>
  );
}

export function WorkCard({ title, label }) {
  return (
  <div className="mb-3 p-4 rounded md:px-8 leading-snug ,dpy-6 bg-gray-100 dark:bg-gray-800">
    <span className="block font-bold">{title}</span>
    <span className="text-gray-500">{label}</span>
  </div>
  );
}

export function WorkFrame({ title, label }) {
  return (
  <div className="py-2 rounded md:px-8 leading-snug md:py-3 dark:bg-gray-800">
    <span className="block">{title}</span>
  </div>
  );
}