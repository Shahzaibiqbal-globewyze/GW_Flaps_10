const Card = ({ number, title, description }) => {
  return (
    <div className="bg-[#f7f7f7] shadow-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900">{number}</h2>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const data = [
  {
    number: "01",
    title: "Marketplace for Plane Rentals",
    description:
      "A convenient marketplace for pilots to rent planes from club owners, fostering a streamlined flying experience.",
  },
  {
    number: "02",
    title: "Virtual Dispatch & Scheduling",
    description:
      "Easily manage aircraft scheduling and availability to keep operations smooth and efficient.",
  },
  {
    number: "03",
    title: "Virtual Flying School Management",
    description:
      "A digital training platform for flight schools to manage courses, schedules, and track student progress.",
  },
  
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
