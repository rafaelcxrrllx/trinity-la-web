import { CheckCircle2 } from "lucide-react";

const highlights = [
  "UX Strategy & Research",
  "Custom Design & Development",
  "Conversion-Focused Approach",
  "Ongoing Support & Optimization",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Design That <span className="gradient-text">Performs.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trinity Los Angeles is a web design agency focused on building clean, modern, and conversion-driven websites for local businesses, brands, and entrepreneurs. We combine UX strategy, design, and development to create websites that don't just look good—they perform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">50+</span>
                <span className="text-muted-foreground text-sm">Projects Delivered</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">100%</span>
                <span className="text-muted-foreground text-sm">Client Satisfaction</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">LA</span>
                <span className="text-muted-foreground text-sm">Based Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
