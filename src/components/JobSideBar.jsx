import CompanyInfo from './CompanyInfo';
import JobManage from './JobManage';
const JobSideBar = ({job, onClickDelete}) => {
  return (
    <aside>
      <CompanyInfo company={job.company} />
      <JobManage onClickDelete={onClickDelete} job={job} />
    </aside>
  );
};

export default JobSideBar;
