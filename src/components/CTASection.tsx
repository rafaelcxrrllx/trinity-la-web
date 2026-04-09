import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lines from "@/assets/standinglogo.svg";

const CTASection = () => {
  return (
    <section style={{ backgroundImage: `url(${lines})`,  zIndex:"0", backgroundSize: "contain", backgroundPosition: "right center",
  backgroundRepeat: "no-repeat" }} className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl border border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Start?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Let's build a website that turns visitors into customers. Book your free consultation today.
            </p>
            <Button variant="glow" size="lg" className="text-base px-8 py-6 animate-pulse-glow" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
