/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Hero = (props) => {
  const { scrollingRef } = props;

  function scrollingRefEvent() {
    scrollingRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../home.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero justify-start max-md:justify-center">
          <div className="max-md:card max-md:w-11/12 max-md:h-fit max-md:py-16 max-md:shadow-xl max-md:bg-base-200">
            <div className="hero-content text-neutral-content text-center ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold font-lato">Inspire Your Day</h1>
                <h1 className="mb-5 text-3xl font-semibold font-lato">
                  ( {new Date().toDateString()} )
                </h1>
                <p className="mb-5 font-lato font-light text-slate-50 text-xl">
                  Discover a daily dose of wisdom, motivation, and inspiration.
                  Let each quote ignite your passion and elevate your mindset
                  every day.
                </p>
                <button onClick={scrollingRefEvent} className="btn btn-primary">
                  See today's quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
