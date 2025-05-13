"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="max-w-[600px] mx-auto px-6 md:px-[150px] text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="numbered-heading">What's Next?</h2>

      <h2 className="text-5xl text-lightest-slate font-semibold mb-5">Get In Touch</h2>

      <p className="text-slate">
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a
        className="mt-12 inline-block px-7 py-5 bg-transparent border border-green text-green rounded font-mono text-sm
        hover:bg-green/10 transition-all cursor-pointer"
        href="mailto:brittany.chiang@gmail.com"
        rel="noreferrer"
      >
        Say Hello
      </a>
    </motion.section>
  );
};

export default Contact;
