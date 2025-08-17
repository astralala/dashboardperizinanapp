import React from 'react';
import { BarChart3, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const MainContent: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,489',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Orders',
      value: '3,247',
      change: '+8%',
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
    {
      title: 'Revenue',
      value: '$47,892',
      change: '+23%',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      title: 'Analytics',
      value: '89.2%',
      change: '+5%',
      icon: BarChart3,
      color: 'bg-orange-500',
    },
  ];

  return (
    <main className="bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 minutes ago', type: 'user' },
                { action: 'Order #1234 completed', time: '15 minutes ago', type: 'order' },
                { action: 'Payment received', time: '1 hour ago', type: 'payment' },
                { action: 'New product added', time: '2 hours ago', type: 'product' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm">{activity.action}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Add User', color: 'bg-blue-500 hover:bg-blue-600' },
                { label: 'New Order', color: 'bg-green-500 hover:bg-green-600' },
                { label: 'View Reports', color: 'bg-purple-500 hover:bg-purple-600' },
                { label: 'Settings', color: 'bg-gray-500 hover:bg-gray-600' },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} text-white p-3 rounded-lg transition-colors text-sm font-medium`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;