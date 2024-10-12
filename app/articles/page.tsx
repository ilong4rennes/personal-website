import Layout from '../layout';
import Link from 'next/link';

export default function Articles() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Articles</h1>
          <p className="text-lg text-gray-400">
            I collect stories and share them with you. Enjoy! 📚
          </p>
        </header>

        {/* Article List */}
        <section className="p-8">
          {/* Category 2: Short Novels */}
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">Short Novels</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <Link href="/articles/lao-chen" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                老陈 Lao Chen
              </Link>
              <span className="text-sm text-gray-400">Jan 27</span>
            </div>
            <div className="flex justify-between">
              <Link href="/articles/cosmic-tears" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                宇宙泪滴 The Cosmic Tears
              </Link>
              <span className="text-sm text-gray-400">Dec 09</span>
            </div>
          </div>

          {/* Category 3: Poems */}
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">Poems</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <Link href="/articles/fox" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                狐 Fox
              </Link>
              <span className="text-sm text-gray-400">Mar 15</span>
            </div>
            <div className="flex justify-between">
              <Link href="/articles/uncertainty" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                不确定性是我爱这个世界的理由 Uncertainty is the Reason I Love the World
              </Link>
              <span className="text-sm text-gray-400">May 22</span>
            </div>
          </div>

          {/* Category 4: Life */}
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">Life</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <Link href="/articles/remember" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                因为我们都记得 The Reason We Remember
              </Link>
              <span className="text-sm text-gray-400">Mar 15</span>
            </div>
            <div className="flex justify-between">
              <Link href="/articles/tokyo-flash" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                东京闪景 Tokyo Flash
              </Link>
              <span className="text-sm text-gray-400">May 22</span>
            </div>
          </div>

          {/* Category 1: Essays */}
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">Commentaries</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <Link href="/articles/article1" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
                &#39;Siren and Sibyl&#39;: Exploring Symbolism in Dante Gabriel Rossetti's Art and Poetry
              </Link>
              <span className="text-sm text-gray-400">Oct 09</span>
            </div>
            <div className="flex justify-between">
              <Link href="/articles/article2" className="text-lg text-gray-300 hover:text-yellow-400 hover:underline">
              淡烟流水画屏幽 ——阿索林与汪曾祺如何通过小说的散文化淡化作品中的悲剧意识？

              </Link>
              <span className="text-sm text-gray-400">Feb 15</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
