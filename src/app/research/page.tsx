import Link from "next/link";

const researchAreas = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Exploring the architectures, systems, and computational foundations driving modern artificial intelligence.",
    topics: [
      "Large Language Models",
      "Neural Network Architectures",
      "AI Agents",
      "Inference Optimization",
      "Machine Learning Systems",
    ],
  },
  {
    number: "02",
    title: "GPU Computing & Architecture",
    description:
      "Understanding parallel computing, GPU architectures, and the systems powering high-performance computation.",
    topics: [
      "CUDA Programming",
      "Parallel Processing",
      "GPU Architecture",
      "High-Performance Computing",
      "Distributed Systems",
    ],
  },
  {
    number: "03",
    title: "Semiconductors & Chip Technologies",
    description:
      "Investigating the hardware foundations of modern computing, from processor architectures to emerging accelerators.",
    topics: [
      "Processor Architecture",
      "Chip Design",
      "Memory Systems",
      "Neural Processing Units",
      "Semiconductor Technologies",
    ],
  },
  {
    number: "04",
    title: "Robotics & Autonomous Systems",
    description:
      "Exploring intelligent machines that perceive, reason, interact with, and navigate the physical world.",
    topics: [
      "Computer Vision",
      "Robotics",
      "Embedded Systems",
      "Edge AI",
      "Autonomous Systems",
    ],
  },
  {
    number: "05",
    title: "Emerging Computing Technologies",
    description:
      "Investigating unconventional computing paradigms that could shape the next generation of technological systems.",
    topics: [
      "Quantum Computing",
      "Neuromorphic Computing",
      "Photonic Computing",
      "Next-Generation Architectures",
    ],
  },
];

const researchProcess = [
  {
    number: "01",
    title: "Study",
    description:
      "Explore existing technologies, scientific literature, documentation, and foundational concepts.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Understand architectures, examine implementations, and identify technical opportunities and limitations.",
  },
  {
    number: "03",
    title: "Experiment",
    description:
      "Build prototypes, reproduce results, conduct experiments, and benchmark different approaches.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Analyze findings, measure performance, document limitations, and derive meaningful insights.",
  },
  {
    number: "05",
    title: "Apply",
    description:
      "Use validated knowledge to engineer original tools, applications, and solutions to real problems.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">RESEARCH &amp; EXPLORATION</span>

          <h1>
            Understanding technology.
            <br />
            Exploring what comes next.
          </h1>

          <p>
            We investigate the technologies shaping the future of computing,
            intelligence, and engineering through independent research,
            experimentation, and technical exploration.
          </p>
        </div>
      </section>

      <section className="research-intro section">
        <div className="container">
          <span className="section-label">OUR RESEARCH DIRECTION</span>

          <h2>
            Research is where
            <br />
            engineering begins.
          </h2>

          <p>
            At AlephIQ, research means going beyond surface-level
            understanding. We study how technologies work, examine the ideas
            and architectures behind them, experiment with their
            implementations, and explore how they can be applied to solve
            meaningful problems.
          </p>
        </div>
      </section>

      <section className="research-areas section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">AREAS OF EXPLORATION</span>
            <h2>Research domains</h2>
            <p>
              Our areas of interest span the technologies shaping the next
              generation of intelligent computing systems.
            </p>
          </div>

          <div className="research-area-list">
            {researchAreas.map((area) => (
              <article className="research-area" key={area.number}>
                <span className="research-number">{area.number}</span>

                <div className="research-area-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <div className="research-topics">
                    {area.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research-method section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">OUR APPROACH</span>
            <h2>From understanding to engineering.</h2>
            <p>
              A structured approach to exploring technologies and translating
              technical understanding into practical outcomes.
            </p>
          </div>

          <div className="method-grid">
            {researchProcess.map((step) => (
              <article className="method-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research-closing section">
        <div className="container">
          <span className="section-label">BEYOND RESEARCH</span>
          <h2>
            Knowledge becomes meaningful
            <br />
            when it creates something.
          </h2>
          <p>
            Research and engineering go hand in hand. We aim to turn technical
            understanding into experiments, open-source contributions, and
            original solutions.
          </p>

          <Link href="/projects" className="text-link">
            Explore our engineering direction &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}