interface BannerProps {
  content: string;
  heading?: string;
}

const Banner: React.FC<BannerProps> = ({ content, heading }) => {
  return (
    <div className="bg-gray-800 text-white text-center py-16 px-8 w-full mx-auto">
      {heading && <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{heading}</h2>}
      <p className="text-md sm:text-sm md:text-xl max-w-full sm:max-w-md md:max-w-xl mx-auto font-medium">
        {content}
      </p>
    </div>
  );
};

export default Banner;
