// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Phone, Mail, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const ContactSection = () => {
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       toast({
//         title: "Message sent!",
//         description: "We'll get back to you within 24 hours.",
//       });
//       (e.target as HTMLFormElement).reset();
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="py-24">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
//           <div>
//             <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Let's <span className="gradient-text">Talk.</span>
//             </h2>
//             <p className="text-muted-foreground mb-8">
//               Ready to start your project? Reach out and we'll get back to you within 24 hours.
//             </p>

//             <div className="space-y-4">
//               <a href="tel:3236757600" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                   <Phone className="w-4 h-4 text-primary" />
//                 </div>
//                 (323) 675-7600
//               </a>
//               <a href="mailto:trinitylosangeles@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                   <Mail className="w-4 h-4 text-primary" />
//                 </div>
//                 rafaelcarrillo09@gmail.com
//               </a>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               placeholder="Your Name"
//               required
//               className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
//             />
//             <Input
//               type="email"
//               placeholder="Email Address"
//               required
//               className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
//             />
//             <Input
//               placeholder="Business Name"
//               className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
//             />
//             <Textarea
//               placeholder="Tell us about your project..."
//               required
//               rows={4}
//               className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
//             />
//             <Button variant="glow" className="w-full h-12" disabled={loading}>
//               {loading ? "Sending..." : "Send Message"}
//               <Send className="ml-2 w-4 h-4" />
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "7fae4e7d-86e9-44f2-bc0b-efc57a343747",
          subject: "New Contact Form Submission",
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          business: "",
          message: "",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
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
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Talk.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to start your project? Reach out and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="tel:3236757600"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                (323) 675-7600
              </a>

              <a
                href="mailto:rafaelcarrillo09@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                rafaelcarrillo09@gmail.com
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />

            <Input
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business Name"
              className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
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
