import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border/50 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Web Design Agency — Los Angeles</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Build a Website That
          <br />
          <span className="gradient-text">Grows Your Business.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Trinity Los Angeles designs high-converting, modern websites for businesses ready to level up their online presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Button variant="glow" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#contact">
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button variant="glow-outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#contact">Get a Free Website Audit</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
