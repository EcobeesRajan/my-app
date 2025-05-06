import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginPage'
import SignupForm from './SignupForm';
import HomePage from './HomePage';




function App() {
  const [page, setPage] = useState('login'); // 'login' | 'signup' | 'home'
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setPage('home');
  };

  return (
    <>
        {page === 'login' && <LoginForm onLogin={handleLogin} onSwitchToSignup={() => setPage('signup')} />}
        {page === 'signup' && <SignupForm onSwitchToLogin={() => setPage('login')} />}
        {page === 'home' && <HomePage username={username} onLogout={() => setPage('login')} />} 
     
    </>
  )
}

export default App
