const JobManage = ({onClickDelete, job}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-6">Manage Job</h3>
      <a
        href="/add-job.html"
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
        Edit Job
      </a>
      <button
        onClick={() => onClickDelete(job.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
        Delete Job
      </button>
    </div>
  );
};

export default JobManage;
