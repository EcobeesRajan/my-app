import React from 'react';

function HomePage({ username, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Welcome, {username}!</h1>
        <button
          onClick={onLogout}
          className="bg-white text-blue-600 font-semibold px-4 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Home Page</h2>
        <p className="text-gray-700 mb-2">✅ You're logged in.</p>
        <div className="bg-white p-4 rounded shadow mt-6">
          <p className="text-gray-600">You can now add your dashboard or data here.</p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
