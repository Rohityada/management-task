import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../lib/api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/auth/signup', { email, password });
      router.push('/login');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
