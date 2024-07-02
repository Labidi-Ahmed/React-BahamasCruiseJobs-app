const JobDescCard = ({job}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-indigo-800 text-lg font-bold mb-6">
        Job Description
      </h3>

      <p className="mb-4">{job.description}</p>

      <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

      <p className="mb-4">{job.salary}</p>
    </div>
  );
};

export default JobDescCard;
