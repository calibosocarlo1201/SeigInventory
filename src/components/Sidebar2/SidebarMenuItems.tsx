import React from 'react'
import { NavLink } from 'react-router-dom';

interface SidebarMenuItemsProps {
    to: string;
    text: string;
    active: boolean;
}

const SidebarMenuItems: React.FC<SidebarMenuItemsProps> = ({to, text, active}) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          active && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        {text}
      </NavLink>
    </li>
  )
}

export default SidebarMenuItems
