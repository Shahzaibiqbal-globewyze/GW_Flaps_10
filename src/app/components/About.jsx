import Image from 'next/image';
import phoneImage from '../assets/FlapsTen/About Us Image.svg'; 

const AboutSection = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About</h2>
          <ul className="space-y-8 relative">
            {[
              {
                title: 'Comprehensive Management',
                description: 'Integrate flight scheduling, asset management, and training tools in one place.',
              },
              {
                title: 'Streamlined Rentals',
                description: 'Pilots can easily rent and schedule flights directly through the app.',
              },
              {
                title: 'Tailored for Every Aviator',
                description:
                  'Designed for student pilots, instructors, and club owners for ease and efficiency.',
              },
              {
                title: 'Enhanced Training Access',
                description: 'Supports virtual flying schools and instructor resources.',
              },
              {
                title: 'Simplified Operations',
                description: 'Helps clubs and enthusiasts focus more on flying and less on logistics.',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                 {index !== 4 && (
                    <div className="absolute left-[7px] top-6 bottom-6 h-14 border-l-2 border-gray-900"></div>
                  )}
                </div>
               <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-black">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src={phoneImage}
            alt="Phone Mockup"
            className="w-full h-auto"
            width={500}
            height={500}
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
