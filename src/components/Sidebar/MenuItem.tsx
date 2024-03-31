import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  to: string;
  activeCondition: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, activeCondition, onClick, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation
    onClick(); // Call the onClick handler provided by the Sidebar component
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick} // Use the custom handleClick function
      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
        activeCondition && 'bg-graydark dark:bg-meta-4'
      }`}
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;
