
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
  
  const Carrer = () => {
    const courses = [
      {
        title: 'Software Developer',
      description: 'Software developers need to be innovative, creative, and technical. They write new code or fix bugs in existing code to improve software functionality.',
        link: 'https://www.guvi.in/',
      },
      {
        title: 'Data Scientist',
      description: 'Data scientists analyze and interpret complex data to help organizations make better decisions. They use statistical techniques and machine learning algorithms.',
        link: 'https://www.guvi.in/',
      },
      {
        title: 'Financial Manager',
      description: 'Financial managers create financial reports, coordinate investment activities, and develop long-term financial strategies for organizations.',
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
  
  export default Carrer;
  