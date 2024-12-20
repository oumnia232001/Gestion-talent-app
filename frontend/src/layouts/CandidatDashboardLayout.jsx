import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {CANDIDAT_DASHBOARD_ROUTE, LOGIN_ROUTE,REGISTER_ROUTE} from "../router/index.jsx";
import { useEffect, useState} from "react";
import { useCandidatContext } from "../context/CandidatContext.jsx";
import CandidatApi from "../services/Api/CandidatApi.js";
import { Button } from "../components/ui/button.jsx";
import CandidatDropDownMenu from "./drop-down-menu/CandidatDropDownMenu.jsx";
import { GaugeIcon} from "lucide-react";
import {CandidatAdministrationSideBar} from "./Administration/CandidatAdministrationSideBar.jsx"
import { ModeToggle } from "../components/mode-toggle.jsx";
import FD from '../../src/assets/FD.png'


export default function CandidatDashboardLayout() {
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
                                <Link className="flex" to={CANDIDAT_DASHBOARD_ROUTE}>
                                    <GaugeIcon className="mx-1" /> Dashboard
                                </Link>
                            </li>
                            <li className="ml-5 px-2 py-1">
                                <CandidatDropDownMenu />
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
                    <div className="w-full md:w-1/4">
                        <CandidatAdministrationSideBar />
                    </div>
                    <div className="w-full md:w-3/4">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}
