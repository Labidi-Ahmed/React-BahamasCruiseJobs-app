import {FaMapMarker} from 'react-icons/fa';

const JobTitleCard = ({job}) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{job.type}</div>
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="inline text-lg mb-1 mr-1 text-orange-700" />
          <p className="text-orange-700 mr-1">{job.location}</p>
        </div>
      </div>
    </>
  );
};

export default JobTitleCard;
