import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

interface SidebarDropdownProps {
    text: string;
    items: {to: string; text: string}[];
    active: boolean;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({text, items, active}) => {

    const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <NavLink
        to="#"
        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          active && 'bg-graydark dark:bg-meta-4'
        }`}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {text}
        {/* Add SVG for dropdown arrow */}
      </NavLink>
      {/* Dropdown Menu */}
      {open && (
        <div className="translate transform overflow-hidden">
          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                    active && '!text-white'
                  }`}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  )
}

export default SidebarDropdown
