
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

const All = () => {
  const courses = [
    {
      title: 'Master React JS and Tailwind CSS',
      description: 'Learn how to build a game listing app with React, Tailwind CSS, Vite, and Vercel.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'React + Tailwind CSS: The Perfect Frontend Stack',
      description: 'Ideal for beginners looking to learn the basics of React and Tailwind CSS.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'Develop Fullstack Apps with NextJS, Tailwind CSS & MongoDB',
      description: 'Learn to develop fullstack applications using NextJS, Tailwind CSS, and MongoDB with Mongoose.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'Data Science and Machine Learning Bootcamp',
      description: 'Master data science and machine learning with Python, covering topics like data analysis, visualization, and machine learning algorithms.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'Deep Learning Specialization',
      description: 'Learn deep learning techniques and build neural networks using TensorFlow and Keras. This course covers CNNs, RNNs, and more.',
      link: 'https://www.guvi.in/',
    },
    {
      title: 'Data Analysis with Python',
      description: 'Gain practical skills in data analysis using Python libraries like Pandas, NumPy, and Matplotlib. Learn to manipulate and visualize data effectively.',
      link: 'https://www.guvi.in/',
    },
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

export default All;
