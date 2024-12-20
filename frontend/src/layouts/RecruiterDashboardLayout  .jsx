import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {CANDIDAT_DASHBOARD_ROUTE, LOGIN_ROUTE,RECRUITER_DASHBOARD_ROUTE1,REGISTER_ROUTE} from "../router/index.jsx";
import { useEffect, useState} from "react";
import { useCandidatContext } from "../context/CandidatContext.jsx";
import CandidatApi from "../services/Api/CandidatApi.js";
import { GaugeIcon} from "lucide-react";
import FD from '../../src/assets/FD.png'
import { RecruiterAdministrationSideBar } from "./Administration/RecruiterAdministrationSideBar .jsx";
import { ModeToggle } from "../components/mode-toggle.jsx";
import RecruiterDropDownMenu from "./drop-down-menu/RecruiterDropDownMenu.jsx";

import Dashboard from "../components/Recruiter/Dahsboard/Dashboard.jsx";

export default function RecruiterDashboardLayout() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
   const {authenticated,setUser,setAuthenticated, logout: contextLogout} = useCandidatContext()
  useEffect (() => {
   if(authenticated === true) {

    CandidatApi.getUser().then(({data}) => {
      setUser(data)
      setAuthenticated (true)
      setIsLoading(false)
    }).catch ((reason) => {
      contextLogout()
    })

   } else {
    navigate(LOGIN_ROUTE)
   }

  },[authenticated]);

  if(isLoading){
    return <></>
  }

    return (
        <>
            <header>
                <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto">
                    <div className="text-2xl text-white font-semibold inline-flex items-center">
                        <img src={FD} className="w-20 mr-4" alt="logo-img" />
                        <span>CAREERS</span>
                    </div>
                    <div>
                        <ul className="flex text-white place-items-center">
                            <li className="ml-5 px-2 py-1">
                                <Link className="flex" to={RECRUITER_DASHBOARD_ROUTE1}>
                                    <GaugeIcon className="mx-1" /> Dashboard
                                </Link>
                            </li>
                            <li className="ml-5 px-2 py-1">
                                <RecruiterDropDownMenu />
                            </li>
                            
                            <li className="ml-5 px-2 py-1">
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="mx-auto px-10 space-y-4 py-4">
                <div className="flex">
                    <div className={'w-100 md:w-2/12 border mr-2 rounded-l'}>
                        <RecruiterAdministrationSideBar/>
                    </div>
                    <div className={'w-100 md:w-10/12 border rounded-l'}>
                        <Outlet />
                       
                    </div>
                </div>
            </main>
        </>
    );
}
