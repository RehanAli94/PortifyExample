import React from "react";
// images 
import Image from 'next/image';
import avatar from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa';
// animations

import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import { Inter } from 'next/font/google';

const Banner = () => {
  return <>

    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} initial='hidden' className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              REHAN <span>ALI</span></motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} initial='hidden' className="mb-6 text-[36px] lg:text-[60px] font-secondry font-semibold uppercase leading-[1]">
              <span className="text-white mr-6">I am a</span>

              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Creator',
                2000,
              ]}
                repeat={Infinity}
                speed={50}
                className="text-accent"
                wrapper="span"
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} whileInView={'show'} viewport={{once:false,amount:0.7}} initial='hidden' className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit id quo recusandae repudiandae asperiores voluptatem perferendis aperiam dolorum, quis repellendus hic laboriosam pariatur libero..</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} whileInView={'show'} viewport={{once:false,amount:0.7}} initial='hidden' className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">My Partfolio</a>
            </motion.div>
            {/*Socials*/}
            <motion.div variants={fadeIn('up', 0.7)} whileInView={'show'} viewport={{once:false,amount:0.7}} initial='hidden' className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div variants={fadeIn('down', 0.5)} whileInView={'show'}  initial='hidden' className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto ">
            <Image src={avatar} alt="loading..." />
          </motion.div>
        </div>
      </div>
    </section>
  </>
};

export default Banner;