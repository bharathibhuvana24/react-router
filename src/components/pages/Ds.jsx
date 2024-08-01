
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

const Ds = () => {
  const courses = [
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
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {courses.map((course, index) => (
        <Card key={index} title={course.title} description={course.description} link={course.link} />
      ))}
    </div>
  );
};

export default Ds;
