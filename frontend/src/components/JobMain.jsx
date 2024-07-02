import JobDescCard from './JobDescCard';
import JobTitleCard from './JobTitleCard';

const JobMain = ({job}) => {
  return (
    <>
      <main>
        <JobTitleCard job={job} />
        <JobDescCard job={job} />
      </main>
    </>
  );
};

export default JobMain;
