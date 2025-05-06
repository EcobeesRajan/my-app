import React, { useState } from 'react';

function LoginForm({ onLogin, onSwitchToSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-lg font-semibold">Login Form</h1>
      </header>

      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            Log In
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <span className="text-blue-500 cursor-pointer hover:underline" onClick={onSwitchToSignup}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
