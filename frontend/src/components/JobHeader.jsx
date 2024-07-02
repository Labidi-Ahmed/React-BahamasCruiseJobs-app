import {Link} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
const JobHeader = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-1 mb-[2px] " /> Back to Job Listings
          </Link>
        </div>
      </section>
    </>
  );
};

export default JobHeader;
