'use client';

import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-green-600">$12,345</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-purple-600">567</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-orange-600">3.45%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">New user registration</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Payment processed</p>
                <p className="text-sm text-gray-500">15 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Success</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-gray-800">Report generated</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Ready</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition">
              Create Report
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg font-medium transition">
              Add User
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg font-medium transition">
              View Analytics
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg font-medium transition">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}