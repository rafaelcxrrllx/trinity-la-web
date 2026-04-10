import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/trinitylogo.svg";
import ba from "@/assets/ba.jpg";
import cl from "@/assets/cl.jpg";
import ppla from "@/assets/ppla.jpg";
import { link } from "fs";

const projects = [
  { title: "Barrio Athletics", category: "Athletic Brand / Branding", color: "from-primary/20 to-primary/5", image:ba, link:"https://barrioathletics.com/" },
  { title: "Pain Psychologist LA", category: "Psychologist / Web Design", color: "from-primary/15 to-primary/5", image: ppla, link:"https://www.painpsychologistla.com/" },
  { title: "Cargo Liner", category: " Online Pet Shop  / Shopify", color: "from-primary/15 to-primary/5", image: cl, link:"https://cargoliner.com/" },
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
                <a href={project.link} className="text-xl font-bold tracking-tight">
                <img  style={{ padding: '12px', display: "inline", width:"100%", height:"100%", objectFit:"cover" }} src={project.image} id="logo" alt="A blue Pegasus" width={75} height={75} />
                </a>
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
