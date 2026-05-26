import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Github,
  GraduationCap,
  Mail,
  Orbit,
  Sparkles,
} from 'lucide-react'
import './style.css'

const researchCards = [
  {
    title: 'Whole-body Human-Object Interaction',
    tag: 'Embodied AI / HOI',
    desc: 'Body + hand + object manipulation, contact modeling, and interaction-aware motion generation.',
  },
  {
    title: 'Motion Generation for Manipulation',
    tag: 'Motion / Contact',
    desc: 'CHOIS / OMOMO-style pipelines, hand anchors, contact prediction, and task-oriented generation.',
  },
  {
    title: 'Research Engineering Systems',
    tag: 'Tools / Evaluation',
    desc: 'Datasets, baselines, evaluation scripts, visual analytics, and reproducible experiment workflows.',
  },
]

const timeline = [
  ['2026', 'Body-hand-object manipulation and contact-aware motion generation'],
  ['2025', 'Embodied AI, human-object interaction, and motion generation systems'],
  ['2024', 'Computer science fundamentals, research reproduction, and AI tooling'],
]

const links = [
  { label: 'Email', href: 'mailto:zhengyukun2005@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Yukun-Zheng', icon: Github },
]

function FloatingSymbol({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`floating-symbol ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: [0, -18, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
        scale: { duration: 0.8, delay },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <main className="site-shell">
      <div className="noise" />
      <div className="grid-layer" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />

      <nav className="nav">
        <motion.a
          href="#top"
          className="brand"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>YZ</span>
          Yukun Zheng
        </motion.a>
        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <a href="#work">Work</a>
          <a href="#trajectory">Trajectory</a>
          <a href="mailto:zhengyukun2005@gmail.com">Contact</a>
        </motion.div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={16} />
            Research Portfolio · Shenzhen University
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            Zheng Yukun
            <span>Embodied AI · HOI · Motion Generation</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18 }}
          >
            I focus on whole-body human-object interaction, body-hand-object manipulation,
            contact-aware motion generation, and research-oriented AI systems.
          </motion.p>

          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
          >
            {links.map(({ label, href, icon: Icon }) => (
              <a className={`button ${label === 'Email' ? 'primary' : ''}`} href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={18} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.22 }}
        >
          <div className="orbital-card">
            <div className="scan-line" />
            <FloatingSymbol className="symbol-a" delay={0.3}>
              <Brain />
            </FloatingSymbol>
            <FloatingSymbol className="symbol-b" delay={0.8}>
              <Cpu />
            </FloatingSymbol>
            <FloatingSymbol className="symbol-c" delay={1.2}>
              <Orbit />
            </FloatingSymbol>
            <div className="core">
              <span>CONTACT</span>
              <strong>Body × Hand × Object</strong>
              <p>from geometric cache to trainable interaction baselines</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="metrics section-wrap">
        <motion.article whileHover={{ y: -8 }} className="metric-card">
          <Brain />
          <strong>Embodied AI</strong>
          <span>Interaction generation and manipulation</span>
        </motion.article>
        <motion.article whileHover={{ y: -8 }} className="metric-card">
          <Cpu />
          <strong>Research Engineering</strong>
          <span>Datasets, baselines, evaluation, visualization</span>
        </motion.article>
        <motion.article whileHover={{ y: -8 }} className="metric-card">
          <GraduationCap />
          <strong>Computer Science</strong>
          <span>Shenzhen University undergraduate researcher</span>
        </motion.article>
      </section>

      <section id="work" className="section-wrap content-section">
        <div className="section-heading">
          <p>Selected Work</p>
          <h2>Research directions</h2>
        </div>

        <div className="card-grid">
          {researchCards.map((item, index) => (
            <motion.article
              className="research-card"
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: 3 }}
            >
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <ArrowUpRight />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="trajectory" className="section-wrap split-section">
        <div>
          <div className="section-heading">
            <p>Trajectory</p>
            <h2>Research timeline</h2>
          </div>
          <div className="timeline">
            {timeline.map(([year, text]) => (
              <motion.div
                className="timeline-row"
                key={year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <b>{year}</b>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.aside
          className="focus-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>Current focus</span>
          <h3>Contact-aware manipulation generation</h3>
          <p>
            Building baselines from object motion to hand-anchor targets and contact logits,
            then moving toward richer body-hand-object interaction generation.
          </p>
        </motion.aside>
      </section>

      <footer className="footer section-wrap">
        <span>© 2026 Yukun Zheng</span>
        <a href="mailto:zhengyukun2005@gmail.com">zhengyukun2005@gmail.com</a>
      </footer>
    </main>
  )
}
