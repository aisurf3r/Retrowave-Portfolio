const IntroSection = () => (
  <section className="py-20 px-6 border-b border-border" aria-labelledby="intro-heading">
    <div className="max-w-3xl mx-auto text-center">
      <h2 id="intro-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
        Un espacio para mis <span className="text-primary text-glow">ideas</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Este portal reúne mis proyectos más recientes — desde aplicaciones web 
        hasta herramientas de desarrollo. Cada proyecto enlaza directamente a su 
        repositorio en GitHub y, cuando existe, a su versión desplegada en producción.
      </p>
    </div>
  </section>
);

export default IntroSection;
