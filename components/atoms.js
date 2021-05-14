const gradient = "bg-gradient-to-r from-primary via-secondary to-secondary";
const gradient_dark = "dark:from-blue-300 dark:via-primarylight dark:to-primarylight";

import NextImage from "next/image";

export function Container({ children }) {
  return (
    <div className="max-w-3xl container mx-auto px-4">
      {children}
    </div>
  );
}

export function Subline({ children }) {
  return (
    <div className="sm:text-lg dark:text-gray-400">
      {children}
    </div>
  );
}

export function InlineHeading({ children }) {
  return (
    <h1 className={`inline-block bg-clip-text text-transparent ${gradient} ${gradient_dark}`}>
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