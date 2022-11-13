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
      <h3 className="font-heading block">{title}</h3>
      <span className="text-paper-900 dark:text-gray-500">{label}</span>
    </div>
  );
}

export function BlurBg() {
  return (
    <div className="top-0 left-0 right-0 -z-10 fixed md:opacity-90">
      <div className="dark:hidden">
            <svg width="911" height="362" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".7" filter="url(#b)" clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m-398.759 130.947-12.955 21.991 2.518 14.546 16.276-2.818 79.664-13.794 95.94-16.612 95.94-16.612 95.083-16.464 95.94-16.612 95.94-16.612 95.94-16.612 95.94-16.612 95.939-16.612L548.49 1.66l95.94-16.612 95.939-16.612 79.665-13.794 16.275-2.818-12.478-72.064-15.016 10.09c-14.16 9.943-44.249 29.794-77.203 28.009-15.476-.684-31.8-6.27-48.223-11.89-18.486-6.325-37.095-12.692-54.757-12.159-21.622.352-41.401 11.35-61.415 22.479-10.119 5.626-20.297 11.286-30.805 15.62-30.435 12.761-62.931 13.621-96.342 9.192-8.788-1.015-17.572-2.345-26.312-3.668-25.284-3.828-50.196-7.6-73.749-3.521-19.84 3.435-38.447 12.095-56.935 20.7-11.846 5.514-23.644 11.005-35.685 15.085-12.191 3.991-24.764 6.565-37.365 9.144-19.333 3.957-38.732 7.928-56.915 17.054-12.672 6.36-24.896 15.31-37.179 24.303-16.828 12.32-33.767 24.722-52.121 30.656C32.973 61.3-1.241 52.243-36.711 41.02c-2.577-.847-5.157-1.707-7.737-2.566-32.063-10.684-64.127-21.368-91.925-7.416-12.91 6.362-24.791 17.779-36.595 29.122-16.44 15.799-32.731 31.454-51.446 33.109-16.598 1.673-34.779-7.091-52.839-15.797-17.795-8.578-35.471-17.1-51.4-15.524-32.095 3.174-58.006 47.156-70.106 68.999Zm23.744 157.031-13.67 17.869-23.544-135.975 16.276-2.818 79.664-13.794 95.94-16.612 95.94-16.612 95.083-16.463 95.94-16.612 95.94-16.612 95.94-16.612 95.939-16.612 95.94-16.612 95.084-16.464 95.939-16.612 95.94-16.612 79.665-13.794 16.275-2.818 31.362 181.126-20.229-20.017c-19.283-19.647-59.742-59.681-93.324-65.092-33.671-5.93-61.501 21.875-89.469 53.979-6.45 7.603-12.865 15.411-19.289 23.231-20.579 25.051-41.258 50.224-63.531 69.153-28.46 24.172-58.896 36.925-95.084 16.464-16.969-9.52-34.997-26.223-52.907-42.816-21.282-19.718-42.397-39.28-61.365-46.446-30.447-11.1-55.135 7.37-79.739 25.778-4.314 3.228-8.626 6.454-12.965 9.518-28.999 21.058-60.292 33.96-91.357 43.08-30.976 9.64-62.67 15.128-98.546 1.562-11.611-4.387-23.59-10.895-35.604-17.423-24.128-13.11-48.4-26.298-70.131-22.535-16.468 2.851-34.718 23.221-52.81 43.414-16.73 18.672-33.323 37.192-48.247 41.574-18.165 5.275-33.681-9.166-50.001-24.354-12.361-11.504-25.182-23.437-39.965-27.558-35.157-9.415-66.852-3.927-95.94 16.612-29.088 20.538-56.427 56.276-69.15 74.515Z" fill="url(#c)" fill-opacity=".42"/></g><defs><linearGradient id="c" x1="-38.5" y1="105" x2="723.171" y2="57.955" gradientUnits="userSpaceOnUse"><stop stop-color="#DC995B"/><stop offset="1" stop-color="#F2EEC4" stop-opacity=".7"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h911v362H0z"/></clipPath><filter id="b" x="-532.229" y="-240.24" width="1516.87" height="666.087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_267_2"/></filter></defs></svg>
      </div>
      <div className="hidden dark:block">
        <svg width="964" height="362" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".7" filter="url(#b)" clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m-398.759 130.947-12.955 21.992 2.518 14.545 16.276-2.818 79.664-13.794 95.94-16.612 95.94-16.612 95.083-16.464 95.94-16.612 95.94-16.612 95.94-16.612 95.94-16.612 95.939-16.612L548.49 1.66l95.94-16.611 95.939-16.613 79.665-13.793 16.275-2.819-12.478-72.064-15.016 10.09c-14.16 9.943-44.249 29.794-77.203 28.009-15.476-.684-31.8-6.27-48.223-11.89-18.486-6.325-37.095-12.692-54.757-12.158-21.622.351-41.401 11.349-61.415 22.478-10.119 5.626-20.297 11.286-30.805 15.62-30.435 12.761-62.931 13.621-96.342 9.192-8.788-1.015-17.572-2.345-26.312-3.668-25.284-3.828-50.196-7.6-73.749-3.521-19.84 3.435-38.447 12.095-56.935 20.7-11.846 5.514-23.644 11.005-35.685 15.085-12.191 3.992-24.764 6.565-37.365 9.144-19.333 3.958-38.732 7.928-56.915 17.054-12.672 6.36-24.896 15.31-37.179 24.303-16.828 12.32-33.768 24.722-52.121 30.656C32.973 61.3-1.241 52.243-36.711 41.02c-2.577-.847-5.157-1.707-7.737-2.566-32.063-10.684-64.127-21.368-91.925-7.416-12.91 6.362-24.791 17.78-36.595 29.122-16.44 15.799-32.731 31.454-51.446 33.109-16.598 1.673-34.779-7.091-52.839-15.797-17.795-8.578-35.472-17.1-51.4-15.524-32.095 3.174-58.007 47.156-70.106 68.999Zm23.744 157.031-13.67 17.869-23.544-135.975 16.276-2.818 79.664-13.794 95.94-16.612 95.94-16.612 95.083-16.463 95.94-16.612 95.94-16.612 95.939-16.612 95.94-16.612 95.94-16.612 95.083-16.464 95.94-16.612 95.94-16.612 79.665-13.794 16.275-2.818 31.362 181.127-20.229-20.018c-19.283-19.646-59.742-59.681-93.324-65.092-33.671-5.93-61.502 21.875-89.47 53.979-6.45 7.603-12.864 15.411-19.288 23.231-20.579 25.051-41.258 50.224-63.531 69.153-28.46 24.172-58.896 36.925-95.084 16.464-16.969-9.52-34.997-26.223-52.907-42.816-21.282-19.718-42.397-39.28-61.365-46.445-30.447-11.101-55.135 7.37-79.739 25.777-4.314 3.228-8.626 6.454-12.965 9.518-28.999 21.058-60.292 33.96-91.357 43.08-30.976 9.64-62.67 15.128-98.546 1.562-11.611-4.387-23.59-10.895-35.604-17.423-24.128-13.11-48.4-26.297-70.131-22.535-16.468 2.852-34.718 23.221-52.81 43.414-16.73 18.672-33.323 37.193-48.247 41.574-18.165 5.275-33.681-9.166-50.001-24.354-12.361-11.504-25.183-23.437-39.965-27.558-35.157-9.415-66.852-3.927-95.94 16.612-29.088 20.538-56.427 56.276-69.15 74.515Z" fill="url(#c)" fill-opacity=".42"/></g><defs><linearGradient id="c" x1="-38.5" y1="105" x2="723.171" y2="57.955" gradientUnits="userSpaceOnUse"><stop stop-color="#131187"/><stop offset="1" stop-color="#578AEF" stop-opacity=".7"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h964v362H0z"/></clipPath><filter id="b" x="-532.229" y="-240.24" width="1516.87" height="666.087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_503_2"/></filter></defs></svg>
      </div>
    </div>
  );
}