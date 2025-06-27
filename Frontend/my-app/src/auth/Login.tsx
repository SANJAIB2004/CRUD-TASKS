import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('token/', { username, password });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate('/tasks');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        className="border p-2 mb-2 block"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mb-4 block"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}

export default Login;
