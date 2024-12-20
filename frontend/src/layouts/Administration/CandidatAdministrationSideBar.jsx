import { cn } from "@/lib/utils";
import { ScrollArea } from "../../components/ui/scroll-area.jsx";
import { Button } from "../../components/ui/button";
import { CANDIDAT_MANAGE_PROFILE_ROUTE, LOGIN_ROUTE,CANDIDAT_MANAGE_OFFER_ROUTE } from "../../router/index.jsx";
import Home from "../../pages/Home.jsx";
import {HandCoins, UserIcon,CircleGauge} from "lucide-react";
import { Link } from "react-router-dom";
export function CandidatAdministrationSideBar({ className }) {
  const playlists = [
    'Playlist 1',
    'Playlist 2',
  ];
  return (
    <div className={cn("pb-12", className)}>
      <div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            FDSolutions
          </h2>
          <div className="space-y-1">
            <Link to={CANDIDAT_MANAGE_PROFILE_ROUTE}>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Profile
            </Button>
            </Link>   
            <Link to={CANDIDAT_MANAGE_OFFER_ROUTE}>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"/>
                <rect width="7" height="7" x="14" y="3" rx="1"/>
                <rect width="7" height="7" x="14" y="14" rx="1"/>
                <rect width="7" height="7" x="3" y="14" rx="1"/>
              </svg>
              Offers
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
