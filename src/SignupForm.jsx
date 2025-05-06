import React, { useState } from 'react';

function SignupForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up with:\nUsername: ${username}\nEmail: ${email}`);
    onSwitchToLogin();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-lg font-semibold">Signup Form</h1>
      </header>

      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-xl font-bold mb-4 text-center text-green-600">Sign Up</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
          >
            Sign Up
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <span className="text-green-500 cursor-pointer hover:underline" onClick={onSwitchToLogin}>
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
