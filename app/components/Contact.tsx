import React from "react";
//motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants';

const Contact = () => {
    return <section id="contact" className="py-16 lg:section ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/** text */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1 flex justify-start items-center ">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium tracking-wide mb-2">Get in touch</h4>
              <h2 className="text-[4px] lg:text-[90px] leading-none mb-12">Let`&rsquo;`s work <br />together!!
              </h2>
            </div>
          </motion.div>
          {/** form */}
          <motion.form
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start text-accent">Your name:
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text" placeholder="Enter your name:" />Your email:
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text" placeholder="Enter your email:" />
            <textarea className="bg-transparent border-b py-8 outline-none w-full placeholder:text-accent focus:border-accent mb-12 resize-none transition-all" placeholder="Enter your massage:"></textarea>
            <button className="btn btn-lg">Sand massage</button>
          </motion.form>
        </div>
      </div>
    </section>;
  };
  
  export default Contact;