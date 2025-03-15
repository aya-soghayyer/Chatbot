import React from 'react';
import Circle from '../Compononts/Circle/Circle';
import ContactHeader from '../Compononts/Header/ContactHeader';

function Contact() {
  return (
    <div className="bg-Primary min-h-screen">
      <div className="container mx-auto px-4 relative">
        {/* Circles as decorative elements */}
        <div className="absolute left-0 top-0 -translate-y-1/2 md:-translate-y-16 z-10">
          <Circle />
        </div>
        <div className="absolute right-0 bottom-0 translate-y-1/2 md:translate-y-0 z-10 hidden md:block">
          <Circle />
        </div>

        {/* Main Content */}
        <div className="relative z-20 pt-16 md:pt-24 pb-16 md:pb-24">
          <ContactHeader />
        </div>
      </div>
    </div>
  );
}

export default Contact;