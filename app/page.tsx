import Layout from './layout';

const projects = [
  {
    year: '2024',
    title: 'Review Master',
    description: 'A Django-based web application similar to Yelp, allowing users to review businesses and share their rating',
    // stars: 2003,
    links: {
      source: 'https://github.com/ilong4rennes/review-master',
    },
  },
  {
    year: '2024',
    title: 'New feature of NodeBB',
    description: 'Implemented new feature "Mark As Resolved" for NodeBB, a popular open-source forum software.',
    // stars: 2003,
    links: {
      source: 'https://github.com/CMU-313/nodebb-f24-the-turtles',
    },
  },
  {
    year: '2024',
    title: 'GCPD Crime Tracking System',
    description: 'A multi-user web application with a Ruby on Rails backend and a React frontend.',
    // stars: 181,
    links: {
      // article: '#',
      demo: '#',
    },
  },
  {
    year: '2024',
    title: 'Personal Website',
    description: 'Built with Next.js and Tailwind CSS.',
    // stars: 6838,
    links: {
      // article: '#',
      demo: 'https://amanda-lu.vercel.app/',
      source: 'https://github.com/ilong4rennes/personal-website',
    },
  },
  {
    year: '2024',
    title: 'Linux Shell',
    description: 'A command-line shell written in C.',
    // stars: 2003,
    links: {
      source: 'https://github.com/project2',
    },
  },
  {
    year: '2024',
    title: 'Cache Memory Simulator',
    description: 'Command-line program that simulates cache memory, written in C.',
    // stars: 2003,
    links: {
      source: 'https://github.com/project2',
    },
  },
  {
    year: '2023',
    title: 'C0 Virtual Machine',
    description: 'Virtual machine for the C0 and C1 languages, which are safe subsets of C.',
    // stars: 2003,
    links: {
      source: 'https://github.com/ilong4rennes/c0-virtual-machine',
    },
  },
  {
    year: '2023',
    title: 'Sudoku',
    description: 'Sudoku game written in Python.',
    // stars: 424,
    links: {
      // article: '#',
      demo: 'https://www.youtube.com/watch?v=FRCU4Q18MOc&t=12s',
      source: 'https://github.com/ilong4rennes/sudoku-15112',
    },
  },
];

export default function Home() {
  return (
    <Layout>
        <section className="flex flex-col md:flex-row justify-between items-center bg-gray-900 p-10 rounded-lg shadow-lg mb-10">
            <div className="md:w-2/3 text-white">
                <h2 className="text-5xl font-bold mb-4">Hey, I&#39;m Amanda</h2>
                <p className="text-xl mb-4">
                    I&#39;m a student studying Information Systems and Artificial Intelligence at Carnegie Mellon University.
                </p>
                <p className="text-lg">
                    On this site, you can explore my projects, read some of my <a href="/articles" className="text-yellow-400 hover:underline">articles</a>, or learn more <a href="/about" className="text-yellow-400 hover:underline">about me</a>.
                </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 ml-10"> {/* Added margin-left (ml-10) */}
                <img src="https://pic2.zhimg.com/80/v2-78eea7f82c0658ecb67a9f8f5d071059_720w.webp" alt="Custom Character" className="w-64 h-64 md:w-80 md:h-80" /> {/* Increased image size */}
            </div>
        </section>
        <header className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          {/* <p className="text-xl mb-6">Open-source projects I&#39;ve made over the years, including this website, an emulator, and various apps, frameworks, and boilerplates.</p> */}
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-2xl hover:shadow-8xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-400 text-sm font-semibold">{project.year}</span>
                {/* <span className="text-sm text-gray-400">{project.stars} ⭐</span> */}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="space-x-4">
                {/* {project.links.article && (
                  <a href={project.links.article} className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600">
                    Article
                  </a>
                )} */}
                {project.links.demo && (
                  <a href={project.links.demo} className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600">
                    Demo
                  </a>
                )}
                <a href={project.links.source} className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600">
                  Source
                </a>
              </div>
            </div>
          ))}
        </section>
    </Layout>
  );
}
