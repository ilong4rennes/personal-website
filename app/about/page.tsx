import Layout from '../layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">About Amanda Lu</h1>
        </header>

        <section className="bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">A Little About Me</h2>
          <p className="leading-relaxed">
            I&#39;m Amanda, currently studying Information Systems at Carnegie Mellon University. I&#39;m passionate about web development, design, and technology. I love to write about programming, technology, and life...
          </p>
        </section>
      </div>
    </Layout>
  );
}
