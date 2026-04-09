import footerlogo from "@/assets/trinitylogo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      {/* <img  style={{ justifySelf:"center", padding: '12px', width:"124px"}} src={footerlogo} id="logo" alt="A blue Pegasus" width={75} height={75} /> */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="gradient-text font-bold text-lg">© {new Date().getFullYear()}</span>
          <span className="text-foreground/50 font-light ml-1">Trinity Los Angeles</span>
        </div>
        <p className="text-muted-foreground text-sm">
          All Rights Reserved. Proverbs 21:31
        </p>
      </div>
    </footer>
  );
};

export default Footer;
