import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
