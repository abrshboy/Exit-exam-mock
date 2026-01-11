
import React from 'react';

interface DashboardProps {
  user: { email: string; name: string };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-indigo-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-900">Exit Exam Mock</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={onLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mock Stats */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <i className="fas fa-tasks text-white"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Tests Completed</dt>
                    <dd className="text-lg font-bold text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Average Score</dt>
                    <dd className="text-lg font-bold text-gray-900">84%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Study Time</dt>
                    <dd className="text-lg font-bold text-gray-900">24.5 hrs</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Available Mocks</h2>
          <div className="space-y-4">
            {[
              { id: 1, title: 'Final Comprehensive Exam A', duration: '120 min', questions: 100 },
              { id: 2, title: 'Medical Sciences Review', duration: '60 min', questions: 50 },
              { id: 3, title: 'Engineering Logic & Ethics', duration: '90 min', questions: 75 },
            ].map((mock) => (
              <div key={mock.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-indigo-500 transition cursor-pointer group">
                <div>
                  <h3 className="font-semibold text-gray-800">{mock.title}</h3>
                  <p className="text-sm text-gray-500">{mock.duration} • {mock.questions} Questions</p>
                </div>
                <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded font-medium group-hover:bg-indigo-600 group-hover:text-white transition">
                  Start Mock
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
