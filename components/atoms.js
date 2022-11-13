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
  <h2 className="flex items-center font-heading text-xl pb-2 md:pb-4 ">
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

export function DrawnLine() {
  return (
    <div className="w-full my-3">
      <svg viewBox="0 0 770 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M195.961 1.34462C195.961 1.34462 230.376 1.19661 299.206 0.90059C368.035 0.604568 402.45 0.456557 402.45 0.456557C402.45 0.456557 463.242 1.41365 584.826 3.32784C706.409 5.24203 767.489 6.29981 768.066 6.50116C768.642 6.70252 768.984 7.02018 769.091 7.45413C769.197 7.88809 769.025 8.25947 768.574 8.56826C768.123 8.87705 767.579 8.99598 766.942 8.92502C766.305 8.85407 765.838 8.6225 765.54 8.2303C765.242 7.8381 765.237 7.44694 765.524 7.05683C765.811 6.66673 766.272 6.43847 766.907 6.37207C767.542 6.30567 768.089 6.4285 768.549 6.74055C769.009 7.0526 769.191 7.42524 769.096 7.85848C769.002 8.29172 768.669 8.60696 768.098 8.80421C767.527 9.00147 706.458 8.14297 584.892 6.22873C463.325 4.3145 368.138 3.50529 299.33 3.80112C230.521 4.09695 163.785 4.72911 99.1219 5.69762C34.4584 6.66612 1.91592 7.10734 1.49435 7.02128C1.07279 6.93522 0.726764 6.77328 0.45628 6.53546C0.185795 6.29764 0.0425076 6.02936 0.0264178 5.73062C0.010328 5.43188 0.124508 5.15973 0.368959 4.91418L195.961 1.34462Z" fill="#CABBA1"/>
      </svg>
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
  <div className="mb-3 p-4 rounded-lg md:px-8 leading-snug py-6 transition-colors bg-paper-300 hover:bg-paper-400  dark:bg-gray-800 dark:hover:bg-gray-700">
    <span className="block font-bold">{title}</span>
    <span className="text-paper-900 dark:text-gray-500">{label}</span>
  </div>
  );
}

export function WorkFrame({ title, label }) {
  return (
    <div className="py-3">
      <h3 className="font-bold block">{title}</h3>
      <span className="text-paper-900 dark:text-gray-500">{label}</span>
    </div>
  );
}