import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here
    formData.append("access_key", "7fae4e7d-86e9-44f2-bc0b-efc57a343747"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Talk.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to start your project? Reach out and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a href="tel:3236757600" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                (323) 675-7600
              </a>
              <a href="mailto:trinitylosangeles@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                rafaelcarrillo09@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />
            <Input
              name="business"
              placeholder="Business Name"
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />
            <Textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={4}
              className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
            />
            <Button variant="glow" className="w-full h-12" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
