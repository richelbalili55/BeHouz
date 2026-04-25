import React from 'react';
import { User, Mail, Lock, UserPlus, ArrowLeft } from 'lucide-react';
import api from '@/api/api';

const RegisterPage = () => {
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-page font-sans p-4">
      <div className="w-full max-w-[440px] bg-white rounded-bh-lg shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-8 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-bh-md bg-brand-primary-bg text-brand-primary mb-4">
            <UserPlus size={28} />
          </div>
          <h1 className="text-22 font-bold text-gray-900 tracking-tight">Create an account</h1>
          <p className="text-14 text-gray-400 mt-2">Join us and start managing your workspace</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleRegister} className="p-8 pt-0 space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-13 font-medium text-gray-600 ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-primary transition-colors">
                <User size={18} />
              </div>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-bh-md text-14 text-gray-900 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-bg focus:border-brand-primary transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-13 font-medium text-gray-600 ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-primary transition-colors">
                <Mail size={18} />
              </div>
              <input
                name="email"
                type="email"
                placeholder="name@company.com"
                required
                className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-bh-md text-14 text-gray-900 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-bg focus:border-brand-primary transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-13 font-medium text-gray-600 ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-primary transition-colors">
                <Lock size={18} />
              </div>
              <input
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
                required
                className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-bh-md text-14 text-gray-900 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-bg focus:border-brand-primary transition-all"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-press text-white font-semibold rounded-bh-md shadow-md shadow-teal-600/10 transition-all duration-200 mt-4"
          >
            Create Account
          </button>
        </form>

        {/* Footer Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-13 text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="inline-flex items-center gap-1 text-brand-primary font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;