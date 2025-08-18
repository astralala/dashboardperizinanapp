import React, { useState } from 'react';
import {
  Home,
  /*Users,
  ShoppingCart,
  Package,
  BarChart3,*/
  Settings,
  FileText,
  Calendar,
  ChevronRight,
  ChevronDown,
  Circle,
  TrainFront,
  TramFront
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  href?: string;
  subItems?: { id: string; label: string; href: string }[];
}

interface SidebarProps {
  isCompact: boolean;
  isMobileOpen: boolean;
  isMobile: boolean;
  onNavigate?: (page: string) => void;
  activeSubmenu?: string | null;
  onSubmenuChange?: (submenuId: string | null) => void;
}

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
  },
  {
    id: 'Sarana',
    label: 'Sarana Perkeretaapian Umum',
    icon: TramFront,
    subItems: [
      { id: 'all-users', label: 'All Users', href: '/users' },
      { id: 'add-user', label: 'Add User', href: '/users/add' },
      { id: 'user-roles', label: 'User Roles', href: '/users/roles' },
    ],
  },
  {
    id: 'Prasarana',
    label: 'Prasarana Perkeretaapian Umum',
    icon: TramFront,
    subItems: [
      { id: 'all-products', label: 'All Products', href: '/products' },
      { id: 'add-product', label: 'Add Product', href: '/products/add' },
      { id: 'categories', label: 'Categories', href: '/products/categories' },
      { id: 'inventory', label: 'Inventory', href: '/products/inventory' },
    ],
  },
  {
    id: 'khusus',
    label: 'Perkeretaapian Khusus',
    icon: TrainFront,
    subItems: [
      { id: 'all-orders', label: 'All Orders', href: '/orders' },
      { id: 'pending', label: 'Pending Orders', href: '/orders/pending' },
      { id: 'completed', label: 'Completed', href: '/orders/completed' },
    ],
  },
  
  {
    id: 'berkas',
    label: 'Simpan Berkas',
    icon: FileText,
    href: '/ui-components'
  },
  {
    id: 'laporan',
    label: 'Laporan kinerja',
    icon: Calendar,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    subItems: [
      { id: 'ui-components', label: 'UI Components', href: '/settings/ui-components' },
      { id: 'other-ui-components', label: 'Tables Sample', href: '/settings/other-ui-components' },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  isCompact, 
  /*isMobileOpen,*/ 
  isMobile, 
  onNavigate,
  activeSubmenu,
  onSubmenuChange
}) => {
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<Set<string>>(new Set());

  const handleMenuClick = (menuId: string, hasSubItems: boolean) => {
    if (isMobile && hasSubItems) {
      const newExpanded = new Set(mobileExpandedMenus);
      if (newExpanded.has(menuId)) {
        newExpanded.delete(menuId);
      } else {
        newExpanded.add(menuId);
      }
      setMobileExpandedMenus(newExpanded);
    } else if (hasSubItems) {
      const newActiveSubmenu = activeSubmenu === menuId ? null : menuId;
      if (onSubmenuChange) {
        onSubmenuChange(newActiveSubmenu);
      }
    } else {
      if (onSubmenuChange) {
        onSubmenuChange(null);
      }
      if (onNavigate) {
        onNavigate(menuId);
      }
    }
  };

  const handleSubItemClick = (subItemId: string) => {
    if (onNavigate) {
      onNavigate(subItemId);
    }
    // Close submenu after selecting sub item
    if (onSubmenuChange) {
      onSubmenuChange(null);
    }
  };

  // Prevent click events from bubbling up to parent
  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        onClick={handleSidebarClick}
        className={`
          ${isMobile ? 'hidden' : 'block'}
          ${isCompact ? 'w-25' : 'w-64'}
          h-screen bg-white text-black transition-all duration-300 ease-in-out
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="p-4 border-b border-sky-200 bg-sky-700">
          <div className={`flex items-center ${isCompact ? 'justify-center' : 'gap-3'}`}>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            {!isCompact && (
              <span className="text-xl font-bold text-white">Admin Perizinan</span>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasSubItems: any = item.subItems && item.subItems.length > 0;
            const isSubmenuActive = activeSubmenu === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id, hasSubItems)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                    hover:bg-blue-50 group relative
                    ${isSubmenuActive ? 'bg-blue-100' : ''}
                    ${isCompact ? 'justify-center' : 'justify-between'}
                  `}
                >
                  <div className={`flex items-center ${isCompact ? 'flex-col gap-1' : 'gap-3'}`}>
                    <Icon className="w-8 h-8 text-black group-hover:text-blue-800" />
                    {isCompact ? (
                      <span className="text-xs text-gray-400 group-hover:text-blue-800">
                        {item.label}
                      </span>
                    ) : (
                      <span className="text-black text-sm group-hover:text-blue-800 text-left">
                        {item.label}
                      </span>
                    )}
                  </div>
                  
                  {hasSubItems && !isCompact && (
                    <ChevronRight
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isSubmenuActive ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Compact Mode Tooltip */}
                {isCompact && (
                  <div className="absolute left-20 top-0 invisible group-hover:visible bg-gray-800 text-white px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        {/*<div className="p-4 border-t border-gray-700 mt-auto">
          <div className={`${isCompact ? 'text-center' : ''}`}>
            {isCompact ? (
              <div className="text-xs text-gray-400">© 2025</div>
            ) : (
              <div>
                <p className="text-sm text-gray-300 font-medium">Admin Panel</p>
                <p className="text-xs text-gray-400">© 2025 All rights reserved</p>
              </div>
            )}
          </div>
        </div>*/}
      </div>

      {/* Submenu Sidebar */}
      {activeSubmenu && !isMobile && (
        <div
          onClick={handleSidebarClick}
          className="w-75 h-screen bg-neutral-100 text-white transition-all duration-300 ease-in-out"
        >
          <div className="p-[22px] border-gray-700 bg-sky-600">
            <div className="flex items-center gap-3">
              {(() => {
                const activeItem = menuItems.find(item => item.id === activeSubmenu);
                const Icon = activeItem?.icon;
                return (
                  <>
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                    <h3 className="font-semibold text-sm text-white">
                      {activeItem?.label}
                    </h3>
                  </>
                );
              })()}
            </div>
          </div>
          
          <nav className="px-2 py-4 space-y-1 flex-1 overflow-hidden">
            {menuItems
              .find(item => item.id === activeSubmenu)
              ?.subItems?.map((subItem) => (
                <button
                  key={subItem.id}
                  onClick={() => handleSubItemClick(subItem.id)}
                  className="flex items-center gap-3 w-full text-left px-4 py-2 text-gray-800 hover:text-sky-700 hover:bg-white rounded-lg transition-colors"
                >
                  <Circle className="w-2 h-2 text-gray-800 fill-current" />
                  {subItem.label}
                </button>
              ))}
          </nav>
        </div>
      )}
    </>
  );
};

// Mobile Menu Component
export const MobileMenu: React.FC<{ isOpen: boolean; onNavigate?: (page: string) => void }> = ({ isOpen, onNavigate }) => {
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const handleMenuClick = (menuId: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      const newExpanded = new Set(expandedMenus);
      if (newExpanded.has(menuId)) {
        newExpanded.delete(menuId);
      } else {
        newExpanded.add(menuId);
      }
      setExpandedMenus(newExpanded);
    } else {
      if (onNavigate) {
        onNavigate(menuId);
      }
    }
  };

  const handleSubItemClick = (subItemId: string) => {
    if (onNavigate) {
      onNavigate(subItemId);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
      <nav className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasSubItems: any = item.subItems && item.subItems.length > 0;
          const isExpanded = expandedMenus.has(item.id);

          return (
            <div key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id, hasSubItems)}
                className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {hasSubItems && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Mobile Submenu */}
              {hasSubItems && isExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems?.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleSubItemClick(subItem.id)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      
      {/* Mobile Footer */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-600 font-medium">Admin Panel</p>
        <p className="text-xs text-gray-500">© 2025 All rights reserved</p>
      </div>
    </div>
  );
};

export { menuItems };
export default Sidebar;