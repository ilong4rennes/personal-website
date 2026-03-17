const projects = [
  {
    title: 'Dream Scope',
    tagline: 'AI platform that tries to make sense of the weirdest thing humans produce: their dreams.',
    demo: 'https://dreamscope.live',
    github: 'https://github.com/ilong4rennes/dreamscope',
    tech: ['AWS ECS', 'Node.js/NestJS', 'BullMQ', 'Redis', 'PostgreSQL', 'OpenAI GPT', 'React'],
  },
  {
    title: 'Tech Notes',
    tagline: 'A digital garden where half-baked ideas somehow become polished technical guides.',
    demo: 'https://ilong4rennes.github.io/tech-notes/',
    github: 'https://github.com/ilong4rennes/tech-notes',
    tech: ['MkDocs', 'Markdown', 'GitHub Pages', 'Python'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-5xl mx-auto">
        <a href="#" className="text-base font-medium tracking-tight">Amanda Lu</a>
        <div className="flex items-center gap-8">
          <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-16 pb-24">
        <h1 className="text-3xl font-semibold leading-snug text-gray-900 max-w-2xl mb-5">
          Software engineer obsessed with building full-stack systems, AI-driven applications, and products that bridge ideas and reality.
        </h1>
        <p className="text-base text-gray-500">
          I study{' '}
          <a
            href="https://www.cmu.edu/information-systems/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-gray-700 hover:text-gray-900 italic"
          >
            Information Systems
          </a>{' '}
          and{' '}
          <a
            href="https://ai.cmu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-gray-700 hover:text-gray-900 italic"
          >
            Artificial Intelligence
          </a>{' '}
          at Carnegie Mellon University.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-8 pb-28">
        <h2 className="text-base font-medium text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl p-7 flex flex-col justify-between min-h-52 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.tagline}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-400">{project.tech.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-8 pb-28">
        <h2 className="text-base font-medium text-gray-900 mb-8">About</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Hi, I&apos;m Amanda, a builder at heart, currently studying Information Systems and AI at Carnegie Mellon.
            </p>
            <p>
              I love working across the full stack, from spinning up distributed backends to crafting clean UIs that feel just right. I&apos;m especially drawn to AI-powered products that make complex things feel simple and magical.
            </p>
            <p>
              Outside of code, I&apos;m usually exploring a new city, hunting down the best coffee, reading about art history, or writing short stories. I believe the best engineers are also curious humans.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/yichen-lu-amanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ilong4rennes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:yichenlu@andrew.cmu.edu"
                className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src="/about-photo.jpg"
              alt="Amanda Lu"
              className="w-full md:w-64 h-80 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-8 pb-12">
        <p className="text-xs text-gray-400">© 2026 Amanda Lu</p>
      </footer>
    </div>
  );
}
