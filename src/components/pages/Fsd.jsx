import React from 'react';

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

const Fsd = () => {
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
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {courses.map((course, index) => (
        <Card key={index} title={course.title} description={course.description} link={course.link} />
      ))}
    </div>
  );
};

export default Fsd;
