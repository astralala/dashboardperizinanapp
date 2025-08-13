import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'pegawai',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-cyan-600 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Panel */}
          <div className="lg:w-3/5 relative overflow-hidden p-6 lg:p-8 flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/backgroundTech.jpg')]">
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 "></div>
            
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Perizinan<br />
                Penyelenggaraan<br />
                Perkeretaapian
              </h1>
              
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                Login Area
              </h2>
              
              <p className="text-gray-300 text-base">
                Silakan masuk untuk mengakses sistem perizinan
              </p>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username/Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 transition duration-200"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                    Remember Me!
                  </label>
                </div>

                {/* Forget Password */}
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition duration-200">
                    Forget Password
                  </a>
                </div>

                {/* User Type Radio Buttons */}
                <div>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="pegawai"
                        checked={formData.userType === 'pegawai'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Pegawai Kemenhub</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="oss"
                        checked={formData.userType === 'oss'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">OSS</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="lainnya"
                        checked={formData.userType === 'lainnya'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Lainnya</span>
                    </label>
                  </div>
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm text-gray-600">I'm not a robot</span>
                    <div className="text-xs text-gray-400">reCAPTCHA</div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
