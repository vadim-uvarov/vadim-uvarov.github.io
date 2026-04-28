import { Github, Linkedin, Mail, Phone, Send, ExternalLink, Download, MapPin, GraduationCap, Briefcase } from "lucide-react";
import vadimPhoto from "@/assets/vadim.jpg";
import { Button } from "@/components/ui/button";

const EMAIL = "uvarov.vadim42@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/vadim-uvarov/";
const CV_URL = `${import.meta.env.BASE_URL}CV_Vadim_Uvarov_2025.pdf`;

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Machine Learning", items: ["Classification", "Regression", "Time-series forecasting", "Hidden Markov models", "Clustering", "MLflow"] },
  { title: "Deep Learning", items: ["TensorFlow", "TensorFlow Lite (on-device)", "PyTorch", "Transfer learning"] },
  { title: "Python", items: ["Pandas", "Scikit-Learn", "NumPy / SciPy", "pytest", "ruff", "mypy"] },
  { title: "Cloud & MLOps", items: ["AWS", "Kubernetes", "Pulumi", "Docker", "GitLab CI/CD", "Grafana", "Prometheus"] },
  { title: "Big Data", items: ["PostgreSQL", "Teradata", "Hadoop", "Spark", "SQL (joins, windows, aggregates)"] },
  { title: "Software Engineering", items: ["Git", "Unit & integration testing", "Code review", "ReactiveX", "Jira", "Asana"] },
  { title: "Statistics & Algorithms", items: ["Hypothesis testing", "Computational complexity", "Graph algorithms (BFS, Dijkstra)", "Recursion & trees"] },
  { title: "Research", items: ["PhD in Machine Learning", "Scientific method", "Article writing & presenting"] },
];

const experience = [
  {
    role: "ML Engineer",
    company: "Centrica",
    note: "energy company",
    location: "Antwerp, Belgium",
    dates: "Apr 2023 – Oct 2025",
    bullets: [
      "Designed, built and deployed an EV charging controller from scratch — the cheapest way of EV charging in the UK, used by thousands of residential customers.",
      "Built a residential energy demand forecaster, increasing savings by more than 15% over the baseline.",
      "Built a physics-based solar energy forecasting model — significantly higher accuracy while staying interpretable.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Sentiance",
    note: "AI startup",
    location: "Antwerp, Belgium",
    dates: "May 2021 – Jan 2023",
    bullets: [
      "Developed an on-device venue-type mapping model in Python / TensorFlow predicting where users visit (shop, restaurant, bar, …).",
      "Applied transfer learning to lift accuracy and tracked the training pipeline in MLflow for full reproducibility.",
      "Shipped a multi-platform on-device implementation with TensorFlow Lite — fast inference and improved user privacy.",
    ],
  },
  {
    role: "Data Scientist → Senior Data Scientist",
    company: "Tele2 Russia",
    note: "telecom",
    location: "Moscow, Russia",
    dates: "Jun 2018 – Apr 2021",
    bullets: [
      "Led a small geodata team after starting as an individual contributor.",
      "Improved subscriber track processing using triangulation and significantly raised point-of-interest (home / work) detection accuracy.",
      "Implemented a map-matching solution in Scala Spark, snapping millions of subscriber locations to road segments — applying findings from my PhD thesis.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Magnit",
    note: "food retailer",
    location: "Krasnodar, Russia",
    dates: "May 2017 – May 2018",
    bullets: [
      "Retail site selection: predicting potential shop revenue from coordinates and surrounding features.",
      "On-shelf availability prediction via time-series forecasting — early restocking signals without computer vision.",
    ],
  },
];

const education = [
  {
    school: "Novosibirsk State Technical University",
    degree: "PhD in Machine Learning",
    dates: "2015 – 2019",
    detail: "Thesis: “Incomplete sequence analysis using hidden Markov models”. Defended February 2020.",
  },
  {
    school: "Novosibirsk State Technical University",
    degree: "MSc in Applied Mathematics and Computer Science",
    dates: "2010 – 2015",
    detail: "Graduate thesis: “HMM implementation using GPU parallel computing”.",
  },
];

const liveDemos = [
  {
    title: "AWS demo project",
    description: "A small full-stack demo deployed to AWS (CloudFront + S3).",
    href: "https://d34zk8rzmbn1ay.cloudfront.net/",
  },
];

const writingsAndTalks = [
  {
    title: "On-Device Deep Learning Location Category Inference Model",
    description: "Peer-reviewed paper, BNAIC / BeNeLearn 2022 (with Musaev, Mets, Tamosiunas, De Schepper, Hellinckx).",
    href: "https://bnaic2022.uantwerpen.be/wp-content/uploads/BNAICBeNeLearn_2022_submission_6606.pdf",
  },
  {
    title: "Feature selection using hypothesis testing",
    description: "Medium article walking through statistical feature selection in practice.",
    href: "https://medium.com/@vadim_uvarov/feature-selection-using-statistical-testing-2d8e7b5e27b8",
  },
  {
    title: "Map matching of cellular data with HMMs — talk",
    description: "Data Fest conference talk on the technical design (Russian, English subtitles, studio recording).",
    href: "https://youtu.be/kdyThl4CZT0",
  },
  {
    title: "PhD thesis — Incomplete sequence analysis with HMMs",
    description: "Thesis text (Russian) and recorded defense.",
    href: "https://youtu.be/Qk9JDMMolnM",
  },
  {
    title: "Street signs character recognition",
    description: "CNN pet project on Chars74k — 83% accuracy, top-14 in a Kaggle training competition.",
    href: "https://github.com/long-johnson",
  },
  {
    title: "ResearchGate profile",
    description: "Full list of publications and research activity.",
    href: "https://www.researchgate.net/profile/Vadim_Uvarov",
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="container-prose flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="font-semibold tracking-tight text-foreground">
          Vadim Uvarov
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-foreground" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={CV_URL}
          download
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          CV
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="container-prose section-y" aria-labelledby="hero-title">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_240px]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Available for freelance work
          </p>
          <h1 id="hero-title" className="text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            Vadim Uvarov
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
            ML Engineer & Data Scientist · PhD in Machine Learning
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            I build complex software powered by mathematical and machine-learning models that solve
            real business problems. With 8+ years across industry and academia, I can take a loosely
            stated business task, formalize it, and deliver an end-to-end solution — independently
            or as part of a team.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Freelance ML engineer</span> — open to
            selected projects in <span className="font-medium text-foreground">Belgium (hybrid)</span>{" "}
            or the rest of the world (<span className="font-medium text-foreground">fully remote</span>).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={CV_URL} download>
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download CV (PDF)
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={LINKEDIN} target="_blank" rel="noreferrer noopener">
                <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Get in touch
              </a>
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Based in Antwerp, Belgium
          </p>
        </div>

        <div className="order-first md:order-last">
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-border bg-muted shadow-sm md:h-56 md:w-56">
            <img
              src={vadimPhoto}
              alt="Portrait of Vadim Uvarov"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-card/50">
      <div className="container-prose section-y">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Skills</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">What I work with</h2>
          <p className="mt-3 text-muted-foreground">
            A broad ML and software engineering toolkit — from research prototypes to production
            services running in the cloud and on the edge.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="container-prose section-y">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Experience</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-muted-foreground">
            Eight years across energy, mobile AI, telecom and retail — a blend of software
            engineering, data science and ML engineering.
          </p>
        </header>

        <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
          {experience.map((item) => (
            <li key={`${item.company}-${item.dates}`} className="relative">
              <span
                className="absolute -left-[31px] top-2 flex h-3 w-3 items-center justify-center rounded-full border border-primary bg-background md:-left-[37px]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.role}{" "}
                  <span className="text-muted-foreground">·</span>{" "}
                  <span className="text-primary">{item.company}</span>
                  {item.note && (
                    <span className="ml-1 text-sm font-normal text-muted-foreground">({item.note})</span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{item.dates}</p>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                {item.location}
              </p>
              <ul className="mt-4 space-y-2 text-foreground/85">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-border/60 bg-card/50">
      <div className="container-prose section-y">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Education</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Academic background</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <article key={e.degree} className="rounded-xl border border-border bg-card p-6">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-foreground">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school} · {e.dates}</p>
              <p className="mt-3 text-foreground/85">{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{title}</h3>
        <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="container-prose section-y">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Projects</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Live demos & writing</h2>
          <p className="mt-3 text-muted-foreground">
            A growing collection of demo projects, papers, talks and pet projects.
          </p>
        </header>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Live demos
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {liveDemos.map((p) => (
                <ProjectCard key={p.href} {...p} />
              ))}
              <div className="flex flex-col items-start justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">More demos coming soon</span>
                <span className="mt-1">This space is reserved for upcoming live ML projects.</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Papers, talks & writing
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {writingsAndTalks.map((p) => (
                <ProjectCard key={p.href} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Languages() {
  const langs = [
    { name: "English", level: "C1 — advanced" },
    { name: "Dutch", level: "A2 — elementary (improving)" },
    { name: "Russian", level: "C2 — native" },
  ];
  return (
    <section className="border-t border-border/60 bg-card/50">
      <div className="container-prose section-y">
        <header className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Languages & life</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Beyond the code</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Languages</h3>
            <ul className="mt-4 space-y-2 text-foreground/85">
              {langs.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium text-foreground">{l.name}</span>
                  <span className="text-sm text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Hobbies</h3>
            <p className="mt-4 text-foreground/85">
              Padel, gym and exploring Belgium. Electric guitar and video games. Travelling and
              getting familiar with foreign cultures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="container-prose section-y">
        <header className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Contact</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Let’s talk</h2>
          <p className="mt-3 text-muted-foreground">
            The best way to reach me is by email. I usually reply within a day.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 break-all font-mono text-base text-foreground group-hover:text-primary">
                {EMAIL}
              </p>
            </div>
          </a>

          <a
            href="tel:+32489374399"
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Phone</p>
              <p className="mt-1 font-mono text-base text-foreground group-hover:text-primary">
                +32-489-37-43-99
              </p>
            </div>
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <Linkedin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="mt-1 text-base text-foreground group-hover:text-primary">
                linkedin.com/in/vadim-uvarov
              </p>
            </div>
          </a>

          <a
            href="https://t.me/v_uvarov"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <Send className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Telegram</p>
              <p className="mt-1 font-mono text-base text-foreground group-hover:text-primary">
                @v_uvarov
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/50">
      <div className="container-prose flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vadim Uvarov. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={LINKEDIN} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/long-johnson" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
