import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";
import AddJob from "../pages/employeeDashboard/AddJob";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import ManageJobs from "../pages/employeeDashboard/ManageJobs";
import Blog from "../features/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
     
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "employer",
        element: <EmployerDashboard />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
      {
        path: "managejobs",
        element: <ManageJobs />,
      },

    ],
  },
]);

export default routes;
