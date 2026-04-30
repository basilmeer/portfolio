import images from '../../assets/images';
import resume from '../../basilmeer-resume.pdf';
import PropTypes from 'prop-types';
import essealCube from "../../assets/esseal_cube.png";

const Welcome = ({ darkMode }) => {
  return (
    <div className="flex flex-col-reverse pt-[105px] lg:grid lg:grid-cols-7">
      <div className="lg:col-span-4">
        <div>
          <h1 className="mb-[35px] text-4xl font-bold normal-case tracking-normal opacity-100 lg:text-6xl">
            Hey there!
          </h1>
          <p className="mb-5 text-lg font-light leading-7 md:leading-9 lg:text-xl">
            I&apos;m <span className="font-bold">Basil Meer</span>, a{" "}
            <span className="font-bold">Managing Partner</span> at{" "}
            <a
              href="https://esseal.co.uk"
              className="inline whitespace-nowrap align-baseline font-bold hover:opacity-80"
              aria-label="Visit Esseal website"
            >
              <img src={essealCube} alt="Esseal cube" className="mr-1 inline-block w-5 align-[-0.15em]" />
              <span className="align-baseline">Esseal</span>
            </a>{" "}
            and a{" "}
            <span className="font-bold">Full-Stack Engineer.</span>{" "}
            I specialize in developing bespoke software using{" "}
            <span className="font-bold">Ruby on Rails</span> &amp;{" "}
            <span className="font-bold">React.js</span>.
            <br className="block md:hidden" />
            <br className="block md:hidden" />
          </p>
          <p className="mb-[35px] text-lg font-light leading-7 md:leading-9 lg:text-xl">
            Always on the look out for interesting projects to work on. If
            you think we can work something out, reach out at{" "}
            <span className="relative z-[1] inline-block">
              <a
                href="mailto:hello@basilmeer.com"
                rel="noopener noreferrer"
                className={`font-bold relative z-[2] border-b-0 after:absolute after:-bottom-1 after:left-3 after:-z-[1] after:h-[calc(100%-12px)] after:w-[calc(100%-8px)] after:transition-all after:duration-300 hover:after:-bottom-0.5 hover:after:-left-[5px] hover:after:h-[105%] hover:after:w-[105%] ${darkMode
                  ? 'text-white after:bg-[#444444] hover:text-black hover:after:bg-white'
                  : 'after:bg-[#e9e9e9] hover:text-white hover:after:bg-black'
                  }`}
              >
                basilmeer@gmail.com
              </a>
            </span>
            {" "} and let&apos;s talk.
          </p>
          <a
            target="_blank"
            href={resume}
            rel="noopener noreferrer"
            className={`mt-8 inline-block border-2 bg-transparent px-[25px] py-[15px] text-lg font-normal shadow-[8px_8px_0_0] transition-all duration-300 hover:shadow-none ${darkMode
              ? 'border-[#444] text-white shadow-[#444] hover:bg-white hover:text-black'
              : 'border-black text-black shadow-black hover:bg-black hover:text-white'
              }`}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="col-start-6 col-span-2">
        <img
          src={images.basil}
          alt="I used to be thin once upon a time"
          className={`mb-8 mt-[35px] w-1/2 md:m-0 md:w-full ${darkMode
            ? 'shadow-[35px_-35px_0_0_#3b3b3b,60px_-60px_0_0_#2e2e2e]'
            : 'shadow-[35px_-35px_0_0_#dddddd,60px_-60px_0_0_#f3f3f3]'
            }`}
        />
      </div>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
