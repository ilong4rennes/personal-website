import './globals.css';

export const metadata = {
  title: 'Amanda Lu',
  description: 'Software engineer obsessed with building full-stack systems, AI-driven applications, and products that bridge ideas and reality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
