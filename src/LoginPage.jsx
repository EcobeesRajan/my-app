import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/home/rajan/Desktop/project/my-app/src/firebase.js"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      setSuccess("");

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      setSuccess(`Welcome back, ${user.email}!`);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setError("Login failed: " + error.message);
    }
  };

  const handleSignup = async () => {
    resetMessages();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Account created: ${userCredential.user.email}`);
    } catch (err) {
      setMessage("Signup failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your gmail"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="password"
          />
        </div>

        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        {success && <p className="text-sm text-green-600 mt-2">{success}</p>}

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
        >
          Log In
        </button>


        {/* <a href="/home/rajan/Desktop/project/my-app/src/SignupForm.jsx"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
        >
          Sign Up
        </a> */}

        {/* <div className="mt-6 text-sm text-center text-gray-600">
            isSignup ? "Don’t have an account?" {' '}
            <span className="text-blue-500 cursor-pointer hover:underline" onClick={onSwitchToSignup}></span>
            </div> */}

         
      </div>
    </div>
  );
};

export default Login;
