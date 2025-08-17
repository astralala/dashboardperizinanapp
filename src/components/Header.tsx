import React, { useState } from 'react';
import { Menu, User, Bell, Search, ChevronDown, /*LogOut, Settings, UserCircle*/ } from 'lucide-react';
import UserDropdown from './UserDropdown';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleMobileMenu: () => void;
  isMobile: boolean;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onToggleMobileMenu, isMobile, isMobileMenuOpen }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-sky-700 shadow-sm border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6 relative z-30">
        <div className="flex items-center gap-4">
          <button
            onClick={isMobile ? onToggleMobileMenu : onToggleSidebar}
            className="p-2 bg-sky-50 hover:bg-sky-500/90 rounded-lg transition-colors flex items-center gap-2"
          >
            <Menu className="w-5 h-5 text-sky-700" />
            {isMobile && (
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            )}
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 text-white border border-sky-600 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-sky-500/90 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-3 border-l border-gray-200 relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center gap-3 hover:bg-sky-500/90 rounded-lg p-2 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-white">Administrator</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <UserDropdown 
              isOpen={isUserDropdownOpen} 
              onClose={() => setIsUserDropdownOpen(false)} 
            />
          </div>
        </div>
      </header>
      
      {/* Overlay for user dropdown */}
      {isUserDropdownOpen && (
        <div 
          className="fixed inset-0 z-20"
          onClick={() => setIsUserDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Header;