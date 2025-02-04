import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar.jsx'
import useIsCollapsed from "./Hooks/use-is-collapsed.js";


export default function AppShell() {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed()
    return (
        <div className='relative h-full overflow-hidden bg-background'>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main
                id='content'
                className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
            >
                <Outlet />
            </main>
        </div>
    )
}
