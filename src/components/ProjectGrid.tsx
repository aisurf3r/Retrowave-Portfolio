import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Neural Dashboard",
    description: "Panel de control en tiempo real con visualización de datos y métricas de rendimiento.",
    tags: ["React", "TypeScript", "D3.js", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "CryptoTracker API",
    description: "API REST para seguimiento de criptomonedas con WebSockets y caché inteligente.",
    tags: ["Node.js", "Express", "Redis", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "PixelForge",
    description: "Editor de imágenes en el navegador con filtros avanzados y exportación en múltiples formatos.",
    tags: ["Canvas API", "WebAssembly", "React", "Vite"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "DevFlow CLI",
    description: "Herramienta CLI para automatizar flujos de desarrollo y despliegue continuo.",
    tags: ["Go", "Docker", "GitHub Actions"],
    github: "https://github.com",
  },
  {
    title: "SynthWave UI",
    description: "Biblioteca de componentes UI con estética retrowave y accesibilidad WCAG 2.1.",
    tags: ["React", "Storybook", "TailwindCSS", "a11y"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "DataPipeline",
    description: "Plataforma de procesamiento de datos en streaming con orquestación visual.",
    tags: ["Python", "Apache Kafka", "React Flow"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "CloudVault",
    description: "Almacenamiento seguro en la nube con cifrado end-to-end y sincronización en tiempo real.",
    tags: ["AWS S3", "Node.js", "React", "Encryption"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "TaskFlow",
    description: "Gestor de tareas colaborativo con tableros Kanban y notificaciones en tiempo real.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "WebSockets"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "CodeSnap",
    description: "Generador de capturas de código con temas personalizables y exportación en alta resolución.",
    tags: ["TypeScript", "Canvas API", "Vite"],
    github: "https://github.com",
  },
  {
    title: "BotForge",
    description: "Plataforma no-code para crear chatbots inteligentes con integración a múltiples canales.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "MetricsPulse",
    description: "Dashboard de métricas de rendimiento para aplicaciones web con alertas configurables.",
    tags: ["React", "Grafana", "Prometheus", "Docker"],
    github: "https://github.com",
    demo: "https://vercel.app",
  },
  {
    title: "AuthShield",
    description: "Microservicio de autenticación con OAuth2, MFA y gestión de sesiones seguras.",
    tags: ["Rust", "JWT", "Redis", "gRPC"],
    github: "https://github.com",
  },
];

const tagColors = [
  "border-neon-cyan/40 text-neon-cyan",
  "border-neon-pink/40 text-neon-pink",
  "border-neon-purple/40 text-neon-purple",
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <article
    className="group relative rounded-lg border border-border bg-card p-6 card-hover"
    style={{ animationDelay: `${index * 100}ms` }}
    aria-label={`Proyecto: ${project.title}`}
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Tecnologías">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            role="listitem"
            className={`text-xs font-mono px-2.5 py-1 rounded-full border ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
            aria-label={`Ver demo de ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  </article>
);

const ProjectGrid = () => (
  <section id="proyectos" className="py-24 px-6" aria-labelledby="projects-heading">
    <div className="max-w-6xl mx-auto">
      <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
        Proyectos
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
        Una selección de proyectos personales y colaborativos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectGrid;
