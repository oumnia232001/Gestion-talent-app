import {cn} from "@/lib/utils"
import {ScrollArea} from "../../components/ui/scroll-area.jsx"
import { Button } from "../../components/ui/button.jsx";
import { LOGIN_ROUTE, RECRUITER_MANAGE_OFFRES_ROUTE,RECRUITER_MANAGE_CANDIDATS_ROUTE,RECRUITER_DASHBOARD_ROUTE } from "../../router/index.jsx";
import Home from "../../pages/Home.jsx";
import { Link } from "react-router-dom";
import {HandCoins, UserIcon,CircleGauge} from "lucide-react";

export function RecruiterAdministrationSideBar({className}) {
  
  return (
    <div className={cn("pb-12", className)}>
      <div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            FDSolutions
          </h2>
          <div className="space-y-1">
           
            <Link to={RECRUITER_MANAGE_OFFRES_ROUTE}> 
            <Button variant="ghost" className="w-full justify-start ">
            <HandCoins />
             Offers
            </Button>
            </Link>
            <Link to={RECRUITER_MANAGE_CANDIDATS_ROUTE}> 
            <Button variant="ghost" className="w-full justify-start">
              <UserIcon/>
             Candidats
            </Button>
            </Link>
            <Link to={RECRUITER_DASHBOARD_ROUTE}> 
            <Button variant="ghost" className="w-full justify-start">
              <CircleGauge/>
             Dashboard
            </Button>
            </Link>
            
          </div>
         </div>
        </div>
      </div>

  )
}