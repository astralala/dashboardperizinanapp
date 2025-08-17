import React, { useState } from 'react';
import { 
  /*Check, */
  X, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  XCircle,
  Download,
  Edit,
  Trash2,
  /*Plus,*/
  Search,
  Eye,
  EyeOff
} from 'lucide-react';

const UIComponents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [textareaValue, setTextareaValue] = useState('');

  const colors = [
    { name: 'Blue', value: 'blue', bg: 'bg-blue-500' },
    { name: 'Green', value: 'green', bg: 'bg-green-500' },
    { name: 'Red', value: 'red', bg: 'bg-red-500' },
    { name: 'Purple', value: 'purple', bg: 'bg-purple-500' },
    { name: 'Yellow', value: 'yellow', bg: 'bg-yellow-500' },
    { name: 'Pink', value: 'pink', bg: 'bg-pink-500' },
    { name: 'Indigo', value: 'indigo', bg: 'bg-indigo-500' },
    { name: 'Gray', value: 'gray', bg: 'bg-gray-500' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UI Components</h1>
          <p className="text-gray-600">Sample UI/UX components built with Tailwind CSS</p>
        </div>

        <div className="space-y-8">
          {/* Buttons Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Primary Buttons */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Primary</h3>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Large Primary
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors">
                  Small Primary
                </button>
              </div>

              {/* Secondary Buttons */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Secondary</h3>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  Secondary Button
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors">
                  Gray Button
                </button>
                <button className="w-full text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                  Text Button
                </button>
              </div>

              {/* Icon Buttons */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">With Icons</h3>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </section>

          {/* Alerts Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alerts</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg flex items-center gap-3">
                <Info className="w-5 h-5 text-blue-600" />
                <div>
                  <strong>Info:</strong> This is an informational alert message.
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <strong>Success:</strong> Your action was completed successfully!
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <div>
                  <strong>Warning:</strong> Please review your settings before proceeding.
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <strong>Error:</strong> Something went wrong. Please try again.
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Form Elements</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Text Inputs */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Text Inputs</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Option
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option>Choose an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>

              {/* Textarea and Checkboxes */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Other Elements</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter your message..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Checkboxes
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">Option 1</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Option 2 (checked)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">Option 3</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Radio Buttons
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="radio-group" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">Choice A</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="radio-group" className="border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Choice B (selected)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="radio-group" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">Choice C</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colors Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {colors.map((color) => (
                <div key={color.value} className="text-center">
                  <div 
                    className={`w-16 h-16 ${color.bg} rounded-lg mx-auto mb-2 cursor-pointer hover:scale-105 transition-transform ${
                      selectedColor === color.value ? 'ring-4 ring-gray-300' : ''
                    }`}
                    onClick={() => setSelectedColor(color.value)}
                  />
                  <p className="text-sm text-gray-600">{color.name}</p>
                  <p className="text-xs text-gray-400">{color.value}-500</p>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Typography</h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Heading 1 - 4xl</h1>
                <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Heading 2 - 3xl</h2>
                <p className="text-sm text-gray-500 mt-1">text-3xl font-bold</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Heading 3 - 2xl</h3>
                <p className="text-sm text-gray-500 mt-1">text-2xl font-semibold</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Heading 4 - xl</h4>
                <p className="text-sm text-gray-500 mt-1">text-xl font-semibold</p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-gray-900">Heading 5 - lg</h5>
                <p className="text-sm text-gray-500 mt-1">text-lg font-medium</p>
              </div>
              <div>
                <p className="text-base text-gray-900">Body text - Regular paragraph text with normal weight.</p>
                <p className="text-sm text-gray-500 mt-1">text-base</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Small text - Used for captions and secondary information.</p>
                <p className="text-sm text-gray-500 mt-1">text-sm text-gray-600</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Extra small text - Used for fine print and labels.</p>
                <p className="text-sm text-gray-500 mt-1">text-xs text-gray-500</p>
              </div>
            </div>
          </section>

          {/* Modal Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Modal</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Open Modal
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Sample Modal</h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This is a sample modal dialog. You can put any content here like forms, 
                    confirmations, or detailed information.
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Cards Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Simple Card</h3>
                <p className="text-gray-600 text-sm">This is a basic card with border and hover effect.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Gradient Card</h3>
                <p className="text-blue-100 text-sm">This card has a beautiful gradient background.</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">Accent Card</h3>
                <p className="text-gray-600 text-sm">This card has a colored left border accent.</p>
              </div>
            </div>
          </section>

          {/* Badges Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Badges & Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Primary
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Success
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                Warning
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                Error
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                Neutral
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                Purple
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                Indigo
              </span>
              <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                Pink
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UIComponents;