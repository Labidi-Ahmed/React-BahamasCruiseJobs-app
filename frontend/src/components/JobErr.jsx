import {Link} from 'react-router-dom';

const JobErr = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Error</h2>
      <p className="text-gray-600 mb-8">Sorry, something went wrong.</p>
      <Link
        to="/"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
        Back to Homepage
      </Link>
    </div>
  );
};

export default JobErr;
