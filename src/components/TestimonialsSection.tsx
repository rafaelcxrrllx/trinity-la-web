import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Henry Gallardo",
    title: "Founder of Barrio Athletics",
    text: "I hired Rafael to make a website for my up and coming athletic brand Barrio Athletics. I couldn't be happier with the finished result. He took his time to go over the website building process from the blueprint all the way up until the final product. His website designing skills are amazing and he makes one feel at ease with his caring attitude throughout the whole project. If you want a tailored website for your business or for personal use you won't be disappointed in hiring Rafael as your man.",
  },
  {
    name: "Wilber M.",
    title: "Owner of Value Apparel",
    text: "Rafa, one of the best people to work alongside with, made the process of creating a well functioning website easy and fast. Very easy to work with, meets deadlines, and most importantly pays attention to every detail. Worked with Rafa before and definitely going to be working with him on any upcoming projects. 10/10 highly recommended.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="text-center text-muted-foreground text-sm mt-8">More testimonials coming soon.</p> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
