import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-900 p-6 shadow-lg">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Amanda Lu</h1>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-white hover:text-yellow-400">
                  Articles
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Apply lighter blue background and padding */}
        <main className="p-12 bg-gray-800">
          {children}
        </main>
      </body>
    </html>
  );
}
