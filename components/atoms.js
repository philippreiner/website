const gradient = "text-primary";
const gradient_dark = "dark:text-blue-600";
/*

const gradient = "bg-gradient-to-r from-primary via-secondary to-secondary";
const gradient_dark = "dark:from-secondary dark:via-purple-500 dark:to-purple-300";

*/

import NextLink from "next/link";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline"

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
    <div className="sm:text-lg dark:text-gray-100 pb-3">
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
    <div className="text-xl md:text-2xl lg:text-3xl leading-normal font-heading">
      {children}
    </div>
  );
}
export function SectionTitle({ children }) {
  return (
  <h2 className="flex items-center font-heading pb-2 md:pb-4 ">
    {children}
    <ArrowLongRightIcon className="w-8 h-8 ml-1"/>
  </h2>
  );
}



export function Homelink() {
  return (
    (<NextLink
      href="/"
      passHref
      className="flex items-center hover:underline decoration-2">

      <div className="icon">
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.15625 13.8125L8.78125 13.2188C8.9375 13.0625 8.9375 12.8125 8.78125 12.6875L3.9375 7.8125H14.625C14.8125 7.8125 15 7.65625 15 7.4375V6.5625C15 6.375 14.8125 6.1875 14.625 6.1875H3.9375L8.78125 1.34375C8.9375 1.21875 8.9375 0.96875 8.78125 0.8125L8.15625 0.21875C8.03125 0.0625 7.78125 0.0625 7.625 0.21875L1.09375 6.75C0.9375 6.90625 0.9375 7.125 1.09375 7.28125L7.625 13.8125C7.78125 13.9688 8.03125 13.9688 8.15625 13.8125Z"/>
        </svg>
      </div>
      <div className="pl-4 font-bold">
        Philipp Reiner
      </div>

    </NextLink>)
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
  <div className="mb-3 p-4 rounded-lg md:px-8 leading-snug py-6 transition-colors bg-paper-300 hover:bg-paper-400  dark:bg-gray-800 dark:hover:bg-gray-700">
    <span className="block font-bold">{title}</span>
    <span className="text-paper-900 dark:text-gray-500">{label}</span>
  </div>
  );
}

export function WorkFrame({ title, label }) {
  return (
    <div className="py-3">
      <h3 className="font-heading block">{title}</h3>
      <span className="text-paper-900 dark:text-gray-500">{label}</span>
    </div>
  );
}