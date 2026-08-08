import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-8 px-6 text-center text-xs tracking-wide border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Aya Kharfan | Multilingual Translator & Localization Specialist</p>
        <p>
          Web Developer:{' '}
          <a 
            href="https://mhamad-beep.github.io/myportfolio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            Mhamad Beep
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
