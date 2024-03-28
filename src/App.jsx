import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';
import JobPage from './pages/JobPage';
import {jobLoader} from './pages/JobPage';
import JobErr from './components/JobErr';
import {toast} from 'react-toastify';
import EditJobPage from './pages/EditJobPage';

//loader loads the data before the component renders

const App = () => {
  //add new job
  const addJobSubmit = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });

      if (!res.ok) {
        throw new Error('Failed to add job. Server error.');
      }
      toast.success('job added successfully');
    } catch (error) {
      console.error('Error adding job:', error);
      toast.error('Failed to add job. Please try again later.');
    }
  };
  //delete job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete job. Server error.');
      }
      toast.success('job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('Failed to delete job. Please try again later.');
    }
  };

  //update job
  const editJob = async (job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error('Failed to edit job. Server error.');
      }
      toast.success('job edited successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('Failed to edit job. Please try again later.');
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* any routes inside the main 
    route will use the main layout */}
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
          errorElement={<JobErr />}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage editJob={editJob} />}
          loader={jobLoader}
          errorElement={<JobErr />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
