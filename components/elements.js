import { about } from "@content/about";
import NextLink from "next/link";

export function Section({children, className}) {
    return (
        <section className={`grid-wrap px-4 md:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}>
            {children}
        </section>
    );
  }
  Section.defaultProps = {
    className: "",
  };

export function Line({className}) {
    return (
        <div className={`w-full h-[2px] bg-paper-400 ${className}`}></div>
    );
}
Line.defaultProps = {
    className: "",
};
export function SectionContainer({children, className}) {
    return (
        <div className={`grid-container ${className}`}>
            {children}
        </div>
    );
  }
  SectionContainer.defaultProps = {
    className: "",
  };

  export function SectionContent({children, className}) {
    return (
        <div className={`grid-content ${className}`}>
            {children}
        </div>
    );
  }
  SectionContent.defaultProps = {
    className: "",
  };

export function SectionFull({children, className}) {
    return (
        <div className={`grid-full ${className}`}>
            {children}
        </div>
    );
  }
  SectionFull.defaultProps = {
    className: "",
  };


export function SectionLine({className}) {
    return (
    <Section> 
            <SectionContainer>
                <Line className={className}/>
            </SectionContainer>
      </Section>
    );
  }
  SectionLine.defaultProps = {
    className: "",
  };

  export function Title({children, className, size}) {
    const CustomHeading = ({ as: Component = 'h2', ...rest }) => <Component {...rest} />;
  
    const defaultSize = 'h2';
    const HeadingComponent = size || defaultSize;

    return (
        <CustomHeading as={HeadingComponent} className={`text-xl md:text-2xl lg:text-3xl leading-normal font-heading${className}`}>
            {children}
        </CustomHeading>
    );
  }
  Title.defaultProps = {
    className: "",
    size: "h2"
  };

  export function Card({children, className}) {
    return (
        <div className={`relative bg-paper-300 dark:bg-slate-800 rounded p-3 md:p-6 flex flex-col items-center justify-center${className}`}>
            {children}
        </div>
    );
  }
  Card.defaultProps = {
    className: "",
  };

  export function Header({ className}) {
    return (
        <header className={`${className}`}>
            <Section>
              <SectionContainer>
              <NextLink
                  href="/"
                  className="py-3 md:py-6 lg:pt-8 flex items-center hover:underline hover:text-primary dark:hover:text-highlight decoration-2">
                  <div className="icon">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.15625 13.8125L8.78125 13.2188C8.9375 13.0625 8.9375 12.8125 8.78125 12.6875L3.9375 7.8125H14.625C14.8125 7.8125 15 7.65625 15 7.4375V6.5625C15 6.375 14.8125 6.1875 14.625 6.1875H3.9375L8.78125 1.34375C8.9375 1.21875 8.9375 0.96875 8.78125 0.8125L8.15625 0.21875C8.03125 0.0625 7.78125 0.0625 7.625 0.21875L1.09375 6.75C0.9375 6.90625 0.9375 7.125 1.09375 7.28125L7.625 13.8125C7.78125 13.9688 8.03125 13.9688 8.15625 13.8125Z"/>
                    </svg>
                  </div>
                  <div className="pl-1.5 md:pl-3 font-bold">
                    {about.name}
                  </div>
                </NextLink>
              </SectionContainer>
            </Section>
            <SectionLine/>
        </header>
    );
  }
  Header.defaultProps = {
    className: "",
  };
