import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    university: "XYZ University",
    email: "john.doe@example.com"
  };

  const goToTable = () => {
    navigate('/Table');
  };

  const goToGraph = () => {
    navigate('/Graph');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
        <div className="text-center mb-4">
          <button
            onClick={goToLogin}
             className="absolute top-4 right-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Go to Login Page
          </button>
        </div>
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md mb-6">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Student Information</h1>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold mb-2">Name: <span className="text-gray-700">{student.name}</span></p>
          <p className="text-lg font-semibold mb-2">Age: <span className="text-gray-700">{student.age}</span></p>
          <p className="text-lg font-semibold mb-2">Major: <span className="text-gray-700">{student.major}</span></p>
          <p className="text-lg font-semibold mb-2">University: <span className="text-gray-700">{student.university}</span></p>
          <p className="text-lg font-semibold mb-2">Email: <span className="text-gray-700">{student.email}</span></p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          onClick={goToTable}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Table Page
        </button>
        <button
          onClick={goToGraph}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Graph Page
        </button>
      </div>
    </div>
  );
};

export default Home;
