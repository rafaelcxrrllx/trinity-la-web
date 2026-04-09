const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="gradient-text font-bold text-lg">Proverbs</span>
          <span className="text-foreground/50 font-light ml-1">21:31</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Trinity Los Angeles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
