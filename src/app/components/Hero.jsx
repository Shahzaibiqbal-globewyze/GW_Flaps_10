import Image from "next/image";
import Buttons from "./Buttons";
import bgImage from "../assets/FlapsTen/Landing Page.svg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Landing Page Background"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
      </div>

      <div className="relative z-10w-full lg:w-1/2 h-full flex flex-col justify-center items-start space-y-8 px-10 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Simplifying Every Aspect of Aviation
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl">
          Experience the future of flight management, where technology meets the
          passion for aviation.
        </p>

        <div className="mt-4">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
