import Layout from '../layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16">
        <div className="md:w-2/3">
          <header className="text-left mb-6">
            <h1 className="text-6xl font-bold mb-4">Nice to meet you!</h1>
          </header>

          <section className="text-white">
            <p className="text-xl leading-relaxed mb-4">
              Hello! I&#39;m Amanda Lu, an Information Systems student at Carnegie Mellon University, where I explore the fascinating intersection of technology and practical application.
            </p>
            <p className="text-xl leading-relaxed mb-4">
              My professional experiences range from web development to strategic business analysis, where I&#39;ve nurtured a knack for crafting solutions that resonate with user needs and business goals.
            </p>
            <p className="text-xl leading-relaxed">
              When I&#39;m not at my computer I like to spend my time reading and learning about art history.
            </p>
          </section>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
          <img 
            src="https://static.wixstatic.com/media/5a569d_a2110f566bce45babac89829d6d71bda~mv2.jpg/v1/fill/w_734,h_734,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/personalpic.jpg" 
            alt="Amanda Lu" 
            className="rounded-lg shadow-lg object-cover w-80 h-80"
          />
        </div>
      </div>

      <section className="bg-gray-850 text-white py-16 px-36">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Besides technical...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Developer Section */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://pic2.zhimg.com/80/v2-760a9555289fd30d82cee5c3d4321949_1440w.webp" 
                    alt="Developer"
                    className="w-90 h-42 mb-8 object-cover"
                />
                <h3 className="text-1xl font-bold mb-4">I love musicals!</h3>
                {/* <p className="text-lg leading-relaxed text-center">
                <a href="/" className="text-yellow-400 hover:underline">Here</a> are some projects I have completed throughout my journey as a developer. Each project has been a unique opportunity for me to develop my skills and learn new technologies.
                </p> */}
            </div>

            {/* Tech Enthusiast Section */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://pic3.zhimg.com/80/v2-6076b339db4d06e2df5c5020f146341c_1440w.webp" 
                    alt="Developer"
                    className="w-90 h-42 mb-8 object-cover"
                />
                <h3 className="text-1xl font-bold mb-4">I write <a href="/articles" className="text-yellow-400 hover:underline">short novels and poems</a>.</h3>
                {/* <p className="text-lg leading-relaxed text-center">
                Being fortunate to live in this exciting era, I take in a lot of information every day, but it&#39;s the transformation into knowledge that truly matters. I share what I learned regularly.
                </p> */}
            </div>

            {/* https://www.instagram.com/stories/highlights/17855194155113987/ */}
            {/* Writer Section */}
            <div className="flex flex-col items-center">
                <img 
                    src="https://pic4.zhimg.com/v2-c5245f59e1e5d63509120118719be875_r.jpg" 
                    alt="Developer"
                    className="w-90 h-42 mb-8 object-cover"
                />
                <h3 className="text-1xl font-bold mb-4">I practice <a href="https://www.instagram.com/stories/highlights/17855194155113987/" className="text-yellow-400 hover:underline">Calligraphy</a>.</h3>
                {/* <p className="text-lg leading-relaxed text-center">
                I wrote short novels and poems in Chinese. I see writing as a means to explore myself and share ideas with others.
                </p> */}
            </div>
            </div>
        </div>
        </section>


        {/* make this section more horizontal padding: */} 
        <section className="bg-gray-900 text-white py-12 px-32 px-32">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let&#39;s get in touch!</h2>
            <div className="flex justify-center space-x-8">
            {/* Email */}
            <a href="mailto:yichenlu@andrew.cmu.edu" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-5.857 3.514a.5.5 0 0 1-.516 0L2 5.383V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.383z"/>
                </svg>
                <span>yichenlu@andrew.cmu.edu</span>
            </a>

            {/* LinkedIn */}
            <a href="www.linkedin.com/in/yichen-lu-amanda" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .632-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H3.127v7.225h1.816zM4.034 5.13c.63 0 1.146-.516 1.146-1.145 0-.63-.516-1.145-1.146-1.145-.63 0-1.146.516-1.146 1.145 0 .63.516 1.145 1.146 1.145zm4.908 8.263V9.359c0-.226.016-.452.08-.615.174-.453.57-.923 1.236-.923.871 0 1.22.697 1.22 1.719v4.049h1.817V9.25c0-1.906-1.02-2.79-2.379-2.79-1.094 0-1.583.607-1.856 1.033v.026h-.013a5.56 5.56 0 0 1 .013-.026V6.169H6.993c.024.386 0 7.225 0 7.225h1.817z"/>
                </svg>
                <span>/yichen-lu-amanda</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/ilong4rennes" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8a8.002 8.002 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.65.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.82-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 7.68 0 0 1 8 4.8c.68.01 1.36.09 2 .26 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.17 0 3.1-1.87 3.76-3.65 3.96.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.003 8.003 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>/ilong4rennes</span>
            </a>
            </div>
        </div>
    </section>

    </Layout>
  );
}
