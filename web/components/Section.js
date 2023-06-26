const Section = ({ heading, intro, children }) => {
  return (
    <section className="py-6">
      {/* Heading */}
      {(heading || intro) && (
        <div className="mb-6">
          {heading && (
            <h1 className="font-bold text-4xl text-center mb-4">{heading}</h1>
          )}
          {intro && <h3 className="text-lg text-center">{intro}</h3>}
        </div>
      )}
      {/* Main */}
      <div>{children}</div>
    </section>
  );
};

export default Section;
