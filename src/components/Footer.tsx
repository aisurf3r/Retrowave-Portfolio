import { Github, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 px-6" role="contentinfo">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Openhub. Todos los derechos reservados.
      </p>
      <nav aria-label="Redes sociales" className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
