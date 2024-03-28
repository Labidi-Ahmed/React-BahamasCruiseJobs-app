import JobCard from './JobCard';
import {useState, useEffect} from 'react';
import Spinner from './Spinner';
const JobsListing = ({fullJobsRequest = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // runs only when the component mount
  // ya3ni mouch bch yawed yfetchi data wakteli state tetbadel
  // ken jina hatineh lfetch lbara raw kol mastate tetbadel trasilna
  // nawdo namlo fetch mel serveur

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = fullJobsRequest ? '/api/jobs' : '/api/jobs?_limit=3';
      try {
        const res = await fetch(apiUrl);

        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('error fetching data ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto ">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {fullJobsRequest ? 'Browse Jobs' : 'Recent Jobs'}
          </h2>

          {/*       <!-- Job Listing  --> */}
          {loading ? (
            <Spinner className="ml-52" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobsListing;
