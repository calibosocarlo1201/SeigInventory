import React from 'react'
import SidebarMenuItems from './SidebarMenuItems';

interface SidebarMenuProps {
    pathname: string;
    sidebarExpanded: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({pathname, sidebarExpanded}) => {
  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        {/* Menu Group 1 */}
        <div>
          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>
          <ul className="mb-6 flex flex-col gap-1.5">
            {/* Usage of SidebarMenuItems component */}
            <SidebarMenuItems to="/dashboard" text="Dashboard" active={pathname === '/dashboard'} />
            {/* Add more menu items here */}
          </ul>
        </div>

        {/* Menu Group 2 */}
        <div>
          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">OTHERS</h3>
          <ul className="mb-6 flex flex-col gap-1.5">
            {/* Usage of SidebarMenuItems component */}
            <SidebarMenuItems to="/chart" text="Chart" active={pathname === '/chart'} />
            {/* Add more menu items here */}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SidebarMenu
