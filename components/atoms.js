const gradient = "bg-gradient-to-r from-primary via-secondary to-secondary";

export function Container({ children }) {
  return (
    <div class="max-w-3xl container mx-auto px-4 lg:px-0">
      {children}
    </div>
  );
}

export function Subline({ children }) {
  return (
    <div class="text-gray-500">
      {children}
    </div>
  );
}

export function InlineHeading({ children }) {
  return (
    <h1 className={`inline-block bg-clip-text text-transparent ${gradient}`}>
      {children} 
    </h1>
  );
}

export function Headline({ children }) {
  return (
    <div class="text-xl sm:text-2xl md:text-3xl leading-normal font-heading">
      {children}
    </div>
  );
}