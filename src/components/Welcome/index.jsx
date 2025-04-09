import images from '../../assets/images';
import resume from '../../basilmeer-resume.pdf';

const Welcome = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-7">
      <div className="lg:col-span-4">
        <div className="welcome-message">
          <h1 className="text-4xl lg:text-6xl font-bold mb-10 normal-case">
            Hey there!
          </h1>
          <p className="text-lg lg:text-xl leading-7 md:leading-9 font-light">
            I&apos;m <span className="font-bold">Basil Meer</span>, a{" "}
            <span className="font-bold">Full-Stack &amp; DevOps Engineer.</span>{" "}
            I specialize in developing bespoke software using{" "}
            <span className="font-bold">Ruby on Rails</span>,{" "}
            <span className="font-bold">React.js</span>,{" "}
            <span className="font-bold">PostgreSQL</span> &amp;{" "}
            <span className="font-bold">GraphQL</span>.{" "}
            <br className="block md:hidden" />
            <br className="block md:hidden" />
            Always on the look out for interesting projects to work on. If
            you think we can work something out, reach out at{" "}
            <span className="anchor-fancy">
              <a href="mailto:hello@basilmeer.com" rel="noopener noreferrer">
                hello@basilmeer.com
              </a>
            </span>
            {" "} and let&apos;s talk.
          </p>
          <a
            target="_blank"
            href={resume}
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black text-lg mt-8 inline-block button-shadow font-normal">
            Download Resume
          </a>
        </div>
      </div>
      <div className="col-start-6 col-span-2">
        <img src={images.basil} alt="I used to be thin once upon a time" className="w-1/2 mb-8 md:m-0 md:w-full  img-me" />
      </div>
    </div>
  );
};

export default Welcome;
