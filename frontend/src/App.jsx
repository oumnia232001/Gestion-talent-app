import { useState } from 'react'
import './App.css'
import {RouterProvider} from "react-router-dom";
import { router } from './router/index.jsx';
import CandidatContext from './context/CandidatContext.jsx';
import{ThemeProvider} from "./components/theme-provider.jsx"
import{Toaster} from "./components/ui/sonner.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <CandidatContext>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router}/>
       </ThemeProvider>
      
       </CandidatContext>
       <Toaster />
    </>
  )
}

export default App
