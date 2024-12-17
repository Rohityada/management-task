import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../lib/auth';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        // Sign-up logic (not implemented)
      }
      router.push('/dashboard');
    } catch (error) {
      alert('Authentication failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
