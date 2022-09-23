import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from "../utilities/NavDB";
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
     const location = useLocation();
     const {pathname} = location;
     const [activeNav, setActiveNav] = useState(pathname);
     

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://material-tailwind.com?ref=mtd"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <H6 color="blue">Versuspay</H6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                           
                            {navLinks.map((link) => 
          <NavItem link={link} key={link.id} activeNav={activeNav} setActiveNav={setActiveNav} path={link.path} />
        )}
                            <li className="rounded-lg mb-2">
                                <Link
                                    to="/logout"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                >
                                    <Icon name="logout" size="2xl" />
                                    Log Out
                                </Link>
                            </li>
                            
                            
                            
                            
                        </ul>

                       
                    </div>
                </div>
            </div>
        </>
    );
  function NavItem({link,  activeNav, setActiveNav, path}) {
    return (
        <li className="rounded-lg mb-2">
                                <Link
                                    to={link.path} onClick={() => setActiveNav(path)}
                                    key={link.id}
                                    className={`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg ${activeNav === path && "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"}`}>
                                    <Icon name={link.icon} size="2xl" />
                                    {link.title}
                                </Link>
                            </li>
    )
  }  
}
