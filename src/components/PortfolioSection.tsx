import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Barrio Athletics", category: "E-Commerce / Branding", color: "from-primary/20 to-primary/5" },
  { title: "Value Apparel", category: "E-Commerce / Web Design", color: "from-primary/15 to-primary/5" },
  { title: "Your Project", category: "Coming Soon", color: "from-muted to-muted/50" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-foreground/20">{project.title}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.category}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
