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
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

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
    // ... inside your return, add 'name' attributes to your inputs so the email knows which field is which
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name" // Added name
        placeholder="Your Name"
        required
        className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
      />
      <Input
        name="email" // Added name
        type="email"
        placeholder="Email Address"
        required
        className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
      />
      <Input
        name="business" // Added name
        placeholder="Business Name"
        className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
      />
      <Textarea
        name="message" // Added name
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
  );
};