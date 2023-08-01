import React  from "react";
// countup
import CountUp from "react-countup";
// inersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import {motion} from 'framer-motion';
// varirants
import { fadeIn } from '../variants'

import Image from 'next/image';
import about from '../assets/about.png';




const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
 
    return <>
    <section ref={ref} id="about" className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/** img */}
          <motion.div
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-tops">
          <Image src={about} alt="loading..." />
          </motion.div>
          {/** text */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1">
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 mb-4">I&aposm a Freelance frontend Developer with over 1 year of developing and designing experience</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Eius molestiae non quae fugiat Sapiente quo eum id eos doloremque voluptas velit maiores officia tempora at quas enim ducimus facili Cupiditate optio autem
            </p>
            {/** stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12"> 
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ?
                    <CountUp start={0} end={5} duration={3} />:null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ?
                    <CountUp start={0} end={15} duration={3} />:null}
                    k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ?
                    <CountUp start={0} end={12} duration={3} />:null}
                    k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                   Satisfied<br />Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button  className="btn btn-lg" >Contact Me
              </button>
              <a href="../assets/CV.pdf" className="text-gradient btn-link" download>Download CV</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  };
  
  export default About;