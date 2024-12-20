import { Outlet, useNavigate, Link } from "react-router-dom";
import { CANDIDAT_DASHBOARD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../router/index.jsx";
import { useEffect } from "react";
import { useCandidatContext } from "../context/CandidatContext.jsx";
import { HomeIcon, LogIn, SquareArrowUp } from "lucide-react";
import FD from '../assets/FD.png'

export default function GuestLayout() {
  const navigate = useNavigate()
  const context = useCandidatContext()

  useEffect(() => {
    if (context.authenticated) {
      navigate(CANDIDAT_DASHBOARD_ROUTE)
    }
  }, []);

  return (
    <>
      <header>
        <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
          <div className="text-2xl text-white font-semibold inline-flex items-center">
            <Link to="/" onClick={() => window.location.reload()}>
              <img src={FD} className="w-20 mr-4" alt="logo-img" />
              <span>CAREERS</span>
            </Link>
          </div>
          <div>
            <ul className="flex text-white">
              <li className="ml-5 px-2 py-1">
                <Link className={'flex'} to={'/'}><HomeIcon className={'mx-1'} /> Home page </Link>
              </li>
              <li className="ml-5 px-2 py-1">
                <Link to={LOGIN_ROUTE} className="flex items-center">
                  <LogIn className={'mx-1'} />
                  Login
                </Link>
              </li>
              <li className="ml-5 px-2 py-1">
                <Link to={REGISTER_ROUTE} className="flex items-center" >
                  <SquareArrowUp className={'mx-1'} />
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className={'container'}>
        <Outlet />
      </main>
    </>
  );
}
