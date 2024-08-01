
const Card = ({ title, description, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={link} className="text-blue-500 hover:text-blue-700">Learn More</a>
    </div>
  </div>
);

const Cyber = () => {
  const courses = [
    {
      title: 'Cybercrime Investigation and Digital Forensics',
      description: 'Learn the fundamentals of cybercrime investigation and digital forensics, including techniques for identifying and tracking cybercriminals.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'FBI Cyber Investigator Certificate Program',
      description: 'A comprehensive program designed to teach law enforcement first responders how to survey and secure digital crime scenes.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'Cyber Crime and IT Training Programs',
      description: 'Explore various cyber crime and IT training programs offered by the Law Enforcement Cyber Center and the International Association of Chiefs of Police.',
      link: 'https://www.guvi.in/',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {courses.map((course, index) => (
        <Card key={index} title={course.title} description={course.description} link={course.link} />
      ))}
    </div>
  );
};

export default Cyber;
