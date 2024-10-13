import Layout from '../../layout';

export default function Article1() {
    return (
      <Layout>
      <div className="min-h-screen bg-neutral-800 text-black p-10">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-gray-200">老陈</h1>
          </header>
  
          <section className="bg-neutral-700 p-8 rounded-lg shadow-lg">
            <p className="leading-relaxed text-gray-200">
              This is the content of the first article. You can write your markdown document content here and style it using Tailwind CSS classes.
            </p>
          </section>
        </div>
      </div>
      </Layout>
    );
  }
  