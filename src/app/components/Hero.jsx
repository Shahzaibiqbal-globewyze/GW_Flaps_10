import Image from "next/image";
import Buttons from "./Buttons";
import bgImage from "../assets/FlapsTen/Landing Page.svg";
import mobileImage from "../assets/FlapsTen/mobile img.svg";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={bgImage}
          alt="Desktop Background"
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
          className="object-center"
        />
      </div>

      <div className="absolute inset-0 block lg:hidden h-auto p-5">
        <Image
          src={mobileImage}
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
          className="object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      <div className="relative z-10 flex flex-col justify-center items-start lg:w-1/2 px-6 lg:px-16 h-auto lg:h-screen mt-10 sm:mt-16">
        <h1 className="text-xl mt-16 md:mt-0 w-2/4 md:w-full sm:text-3xl lg:text-5xl font-bold text-white leading-snug">
        Simplifying GA Fleet and Line Management
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed mt-4">
          Experience the future of flight management, where technology meets the
          passion for aviation.
        </p>
        <div className="mt-6">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
