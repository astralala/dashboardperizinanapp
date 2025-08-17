import React from 'react';
import { User, Settings, LogOut, UserCircle, Shield, HelpCircle } from 'lucide-react';

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    {
      icon: UserCircle,
      label: 'Profile',
      onClick: () => {
        console.log('Navigate to profile');
        onClose();
      }
    },
    {
      icon: Settings,
      label: 'Account Settings',
      onClick: () => {
        console.log('Navigate to settings');
        onClose();
      }
    },
    {
      icon: Shield,
      label: 'Security',
      onClick: () => {
        console.log('Navigate to security');
        onClose();
      }
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      onClick: () => {
        console.log('Navigate to help');
        onClose();
      }
    }
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-30">
      {/* User Info */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Icon className="w-4 h-4 text-gray-500" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <div className="border-t border-gray-100 pt-2">
        <button
          onClick={() => {
            console.log('Logout');
            onClose();
          }}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;