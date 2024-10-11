import Layout from '../layout';
import Link from 'next/link';

export default function Articles() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Amanda&#39;s Articles</h1>
        </header>

        <section className="bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Article List</h2>
          <ul className="space-y-4">
            <li><Link href="/articles/article1" className="text-blue-600 hover:underline">2023 - Article Title 1</Link></li>
            <li><Link href="/articles/article2" className="text-blue-600 hover:underline">2024 - Article Title 2</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
