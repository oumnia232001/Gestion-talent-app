import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/Home.jsx';
import LoginPage from '../pages/Login.jsx';
import RegisterPage from '../pages/Register.jsx';
import NotFound from "../pages/NotFound.jsx";
import Layout from "../layouts/Layout.jsx";
import GuestLayout from "../layouts/GuestLayout.jsx";
import CandidatDashboardLayout from "../layouts/CandidatDashboardLayout.jsx";
import CandidatDashboard from "../components/CandidatLogin/CandidatDashboard.jsx";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout .jsx";
import AdminDashboard from "../components/Admin/AdminDashboard.jsx";
import RecruiterDashboardLayout from "../layouts/RecruiterDashboardLayout  .jsx";
import RecruiterDashboard from "../components/Recruiter/RecruiterDashboard.jsx";
import ManageOffres from "../components/Recruiter/ManageOffres.jsx";
import ManageCandidats from "../components/Recruiter/ManageCandidats.jsx";
import RecruiterDashboard1 from "../components/Recruiter/RecruiterDashboard1.jsx";
import ProfileUpsertForm1 from "../components/CandidatLogin/ProfileUpsertForm1.jsx";
import OfferListForCandidat from "../components/CandidatLogin/OfferListForCandidat.jsx";

export const LOGIN_ROUTE = '/login'
export const CANDIDAT_DASHBOARD_ROUTE = '/candidat/dashboard'
export const ADMIN_DASHBOARD_ROUTE = '/admin/dashboard'
const RECRUITER_BASE_ROUTE = '/recruiter'
const  PROFILE_DASHBOARD_ROUTE = '/profile'
const  OFFER_DASHBOARD_ROUTE = '/offer'
export const RECRUITER_DASHBOARD_ROUTE = RECRUITER_BASE_ROUTE+'/dashboard'
export const RECRUITER_MANAGE_OFFRES_ROUTE = RECRUITER_BASE_ROUTE+'/manage-offres'
export const RECRUITER_MANAGE_CANDIDATS_ROUTE = RECRUITER_BASE_ROUTE+'/manage-candidats'
export const REGISTER_ROUTE = '/register';
export const RECRUITER_DASHBOARD_ROUTE1 = RECRUITER_BASE_ROUTE
export  const  CANDIDAT_MANAGE_PROFILE_ROUTE = PROFILE_DASHBOARD_ROUTE
export  const  CANDIDAT_MANAGE_OFFER_ROUTE = OFFER_DASHBOARD_ROUTE
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
       },

      {
        path: '*',
        element: <NotFound/>
      },
    ]
  },
  {
    element: <GuestLayout/>,
    children: [
        {
            path: LOGIN_ROUTE,
            element: <LoginPage/>
          },
          {
            path: REGISTER_ROUTE,
            element: <RegisterPage/>
          },

     ]
   },
   {
    element: <CandidatDashboardLayout/>,
    children: [

        {
            path: CANDIDAT_DASHBOARD_ROUTE,
            element: <CandidatDashboard/>
          },
          {
            path: CANDIDAT_MANAGE_PROFILE_ROUTE,
            element: <ProfileUpsertForm1/>
          },
          {
            path:  CANDIDAT_MANAGE_OFFER_ROUTE,
            element: <OfferListForCandidat/>
          },

    ]
   },
   {
    element: <AdminDashboardLayout/>,
    children: [

        {
            path: ADMIN_DASHBOARD_ROUTE,
            element: <AdminDashboard/>
          },

    ]
   },
   {
    element: <RecruiterDashboardLayout/>,
    children: [

        {
            path: RECRUITER_DASHBOARD_ROUTE1,
            element: <RecruiterDashboard/>
          },
          {
            path: RECRUITER_DASHBOARD_ROUTE,
            element: <RecruiterDashboard1/>
          },
          {
            path: RECRUITER_MANAGE_CANDIDATS_ROUTE,
            element: <ManageCandidats/>
          },

          {
            path: RECRUITER_MANAGE_OFFRES_ROUTE,
            element: <ManageOffres/>
          },
    ]
   },
    
]);
