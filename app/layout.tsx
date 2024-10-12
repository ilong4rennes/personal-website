import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <>
        <title>Amanda Lu</title>
      </>
      <body>
        <header className="bg-neutral-800 py-6 px-18 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Favicon as an image, linking back to home */}
              <Link href="/">
                <img
                  src="/favicon.ico"
                  alt="favicon"
                  className="w-8 h-8"
                />
              </Link>
              {/* Smaller Amanda Lu text */}
              <h1 className="text-xl font-bold text-gray-200">
                <Link href="/">Amanda Lu</Link>
              </h1>
            </div>

            <ul className="flex space-x-6">
              {/* Add `text-yellow-400` class manually to the active page */}
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-300 hover:text-white"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Centered content with increased spacing between sections */}
        <main className="py-20 px-52 bg-neutral-800 text-gray-200">
          {children}
        </main>
      </body>
    </html>
  );
}
