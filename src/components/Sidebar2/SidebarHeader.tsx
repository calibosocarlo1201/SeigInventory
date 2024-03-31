import React from 'react'
import { NavLink } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
// import Logo from '../../images/logo.svg';

interface SidebarHeaderProps {
    triggerRef: React.RefObject<any>;
    setSidebarOpen: (arg: boolean) => void;
    sidebarExpanded: boolean;
    sidebarOpen: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({triggerRef, setSidebarOpen, sidebarExpanded, sidebarOpen}) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink to="/">
      </NavLink>
      <button
        ref={triggerRef}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarExpanded}
        className="block lg:hidden"
      >
        {/* Add your SVG here */}
      </button>
    </div>
  )
}

export default SidebarHeader
