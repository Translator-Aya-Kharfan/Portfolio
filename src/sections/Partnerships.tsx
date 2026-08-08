import React from 'react';

const Partnerships = () => {
  const brands = [
    "Amazon", "Adobe", "Tesla", "Philips", "Booking.com", "HSBC", 
    "Honda", "Motorola Solutions", "Jaguar Land Rover", "Johnson & Johnson", 
    "Raytheon", "Canon", "Accenture", "American Heart Association", 
    "Zoho", "Ipsos", "Versuni", "Husqvarna", "PACCAR", "Wondershare"
  ];

  // Duplicate the array to create a seamless loop
  const infiniteBrands = [...brands, ...brands];

  return (
    <section className="py-8 border-y border-border overflow-hidden bg-white/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <h2 className="text-sm font-medium text-primary tracking-wide">Partnerships & Brands</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
          {infiniteBrands.map((brand, i) => (
            <React.Fragment key={i}>
              <span className="text-xl md:text-2xl font-serif text-primary/70 mx-8 transition-colors hover:text-primary">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
};

export default Partnerships;
