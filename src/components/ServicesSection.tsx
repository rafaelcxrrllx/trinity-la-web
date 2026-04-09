import { Globe, Palette, RefreshCcw, TrendingUp, Layout } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", description: "Custom-built websites that combine stunning design with powerful functionality." },
  { icon: Palette, title: "UX/UI Design", description: "Intuitive interfaces designed around your users' needs for maximum engagement." },
  { icon: RefreshCcw, title: "Website Redesign", description: "Transform your outdated website into a modern, high-performing digital experience." },
  { icon: TrendingUp, title: "Conversion Optimization", description: "Data-driven strategies to turn your website visitors into paying customers." },
  { icon: Layout, title: "Landing Pages", description: "High-converting landing pages engineered to capture leads and drive revenue." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We help businesses turn their website into a customer-generating system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
