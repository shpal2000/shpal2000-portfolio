import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            Home
          </Link>
        </div>
        <div>
          <Link href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;