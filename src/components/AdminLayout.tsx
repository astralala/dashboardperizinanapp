import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar, { MobileMenu } from './Sidebar';
import MainContent from './MainContent';
import UIComponents from './UIComponents';
import OtherUIComponents from './OtherUIComponents';
import PageReport from './PageReport';

const AdminLayout: React.FC = () => {
  const [isSidebarCompact, setIsSidebarCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarCompact(!isSidebarCompact);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /*const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };*/

  // Handle navigation
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Handle submenu state
  const handleSubmenuChange = (submenuId: string | null) => {
    setActiveSubmenu(submenuId);
  };

  // Close submenu when clicking outside
  const handleMainContentClick = () => {
    if (activeSubmenu) {
      setActiveSubmenu(null);
    }
  };
  const renderContent = () => {
    switch (currentPage) {
      case 'ui-components':
        return <UIComponents />;
      case 'berkas':
        return <UIComponents />;
      case 'laporan':
        return <PageReport />;
      case 'other-ui-components':
        return <OtherUIComponents />;
      default:
        return <MainContent />;
    }
  };
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar Container - Full Height */}
      <div className="flex">
        <Sidebar
          isCompact={isSidebarCompact}
          isMobileOpen={isMobileMenuOpen}
          isMobile={isMobile}
          onNavigate={handleNavigation}
          activeSubmenu={activeSubmenu}
          onSubmenuChange={handleSubmenuChange}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col" onClick={handleMainContentClick}>
        <Header 
          onToggleSidebar={toggleSidebar}
          onToggleMobileMenu={toggleMobileMenu}
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onNavigate={handleNavigation} />
        
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
          
          {/* Footer */}
          <footer className="bg-red-500 border-t border-gray-200 px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white">
                © 2025 Admin Panel. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-white">
                <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-red-200 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-red-200 transition-colors">Support</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;