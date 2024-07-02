import JobHeader from '../components/JobHeader';
import JobSideBar from '../components/JobSideBar';

import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom';

import JobMain from '../components/JobMain';
import {toast} from 'react-toastify';

const JobPage = ({deleteJob}) => {
  const navigate = useNavigate();
  /*  const [job, setJob] = useState(null); */
  /*   const {id} = useParams(); */
  /* first method of fetchinf the job data  */

  /*  useEffect(() => {
    const jobFetching = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.log('fetching error', error);
      } finally {
        setLoading(false);
      }
    };
    jobFetching();
  }, []); */

  const onClickDelete = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete  this lising ?'
    );
    if (!confirm) {
      return;
    }
    deleteJob(jobId);

    navigate('/jobs');
  };
  const job = useLoaderData();

  return (
    <>
      <JobHeader />
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <JobMain job={job} />
            {/*      <!-- Sidebar --> */}
            <JobSideBar onClickDelete={onClickDelete} job={job} />
          </div>
        </div>
      </section>
    </>
  );
};
// loader function
const jobLoader = async ({params}) => {
  /* console.log(params); */
  try {
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error loading job data: ' + error.message);
  }
};

export default JobPage;
export {jobLoader};
