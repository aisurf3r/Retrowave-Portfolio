const HeroSection = () => (
  <header className="relative min-h-[70vh] flex items-center justify-center px-6 grid-bg overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-glow" aria-hidden="true" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in opacity-0">
        Portafolio de Desarrollo
      </p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 gradient-text">
        DevPortal
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
        Construyendo experiencias digitales con código limpio y diseño intencional
      </p>

      <div className="mt-10 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_25px_hsl(185_100%_55%/0.4)] transition-all duration-300 hover:scale-105"
        >
          Ver Proyectos
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </header>
);

export default HeroSection;
