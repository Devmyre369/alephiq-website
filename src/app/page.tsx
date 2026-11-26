import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Explore",
    description:
      "Investigate existing technologies, emerging ideas and new possibilities.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Study architectures, principles, research and underlying foundations.",
  },
  {
    number: "03",
    title: "Experiment",
    description:
      "Test capabilities, reproduce results and identify limitations.",
  },
  {
    number: "04",
    title: "Engineer",
    description:
      "Build original systems, products, tools and practical solutions.",
  },
  {
    number: "05",
    title: "Share",
    description:
      "Document and publish our research, experiments and engineering journey.",
  },
];

const researchDomains = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "AI architectures, large language models, neural networks, intelligent systems and inference optimization.",
  },
  {
    number: "02",
    title: "GPU Computing",
    description:
      "CUDA programming, parallel computing, GPU architectures, high-performance computing and distributed systems.",
  },
  {
    number: "03",
    title: "Semiconductors",
    description:
      "Processor architectures, chip design, fabrication technologies, memory systems and hardware accelerators.",
  },
  {
    number: "04",
    title: "Robotics & Autonomous Systems",
    description:
      "Robotics, autonomous systems, embedded intelligence, computer vision and edge AI.",
  },
  {
    number: "05",
    title: "Emerging Computing",
    description:
      "Quantum computing, neuromorphic systems, photonic computing and next-generation architectures.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero container">
        <p className="eyebrow">INDEPENDENT DEEP-TECH RESEARCH &amp; DEVELOPMENT</p>

        <h1>
          Exploring technology.
          <br />
          Understanding its foundations.
          <br />
          Engineering what comes next.
        </h1>

        <p className="hero-description">
          AlephIQ is an independent deep-tech research and development
          initiative exploring emerging technologies, investigating their
          foundations, experimenting with their capabilities and engineering
          solutions to real-world problems.
        </p>

        <div className="hero-actions">
          <Link href="/research" className="button-primary">
            Explore our work <span aria-hidden="true">&#8599;</span>
          </Link>

          <a href="#about" className="button-secondary">
            Discover AlephIQ
          </a>
        </div>

        <div className="hero-bottom">
          <span>RESEARCH-DRIVEN</span>
          <span>EXPERIMENTATION-LED</span>
          <span>ENGINEERING-FOCUSED</span>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="philosophy section-padding">
        <div className="container">
          <p className="eyebrow">OUR PHILOSOPHY</p>

          <h2>
            Meaningful innovation begins with
            <span> understanding.</span>
          </h2>

          <p className="section-description">
            Technology should not simply be used. It should be explored,
            questioned, understood and extended. Our approach combines
            independent research, hands-on experimentation and original
            engineering to transform technological understanding into practical
            solutions.
          </p>

          <div className="principles">
            {principles.map((item) => (
              <article className="principle" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section id="research" className="domains section-padding">
        <div className="container">
          <p className="eyebrow">AREAS OF EXPLORATION</p>

          <h2>Exploring the technologies shaping tomorrow.</h2>

          <p className="section-description">
            Our research spans the foundations of modern computing and the
            emerging technologies that could define its future.
          </p>

          <div className="domain-grid">
            {researchDomains.map((domain) => (
              <Link
                href="/technologies"
                className="domain-card block"
                key={domain.number}
              >
                <span>{domain.number}</span>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <div className="card-arrow" aria-hidden="true">
                  &#8599;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section id="engineering" className="engineering section-padding">
        <div className="container">
          <p className="eyebrow">FROM RESEARCH TO ENGINEERING</p>

          <h2>Understanding is only the beginning.</h2>

          <p className="section-description">
            Research becomes meaningful when knowledge can be applied. We aim to
            transform technical understanding into engineering output:
            prototypes, software, tools and products designed to address
            specific real-world problems.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="publications section-padding">
        <div className="container">
          <p className="eyebrow">KNOWLEDGE &amp; OPEN EXPLORATION</p>

          <h2>Research documented. Knowledge shared.</h2>

          <p className="section-description">
            We document our research, technical explorations, experiments,
            benchmarks and engineering work. Publications and open-source
            contributions make our process transparent and allow others to learn
            from and build upon our work.
          </p>

          <a
            href="https://github.com/Devmyre369"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary mt-7"
          >
            Explore GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </section>
    </main>
  );
}