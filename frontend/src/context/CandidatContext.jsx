import { createContext,useContext,useState } from "react"
import CandidatApi from "../services/Api/CandidatApi.js"
import { useNavigate } from "react-router-dom"
import { CANDIDAT_DASHBOARD_ROUTE } from "../router/index.jsx"

 export const CandidatStateContext =  createContext({
user: {},
authenticated: false,
setUser: () => {
},
logout: () => { 
},
login: (email, password) => {},
setAuthenticated: () => {},
})
export default function CandidatContext ({children}){
const [user, setUser] = useState({})
const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))


const login = async (email, password) => {
  return CandidatApi.login(email, password)
}

const logout = () => {
  setUser({})
    setAuthenticated (false)
}
const setAuthenticated = (isAuthenticated) => {
  _setAuthenticated(isAuthenticated)
  window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
}
return <>
  <CandidatStateContext.Provider value={{
 user,
 login,
 logout,
 setUser,
 authenticated,
 setAuthenticated,

}}>
{children}
  </CandidatStateContext.Provider>
</>
}
export const useCandidatContext = () => useContext(CandidatStateContext)