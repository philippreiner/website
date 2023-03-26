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
        <CustomHeading as={HeadingComponent} className={`text-xl md:text-2xl lg:text-3xl leading-normal font-heading ${className}`}>
            {children}
        </CustomHeading>
    );
  }
  Title.defaultProps = {
    className: "",
    size: "h2"
  };

