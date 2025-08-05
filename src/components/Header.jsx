import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='relative min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden' style={{ backgroundImage: "url('header_img.png')" }} id='Header'>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex items-center justify-center min-h-screen text-white text-center px-6 md:px-20 lg:px-32'>
                <div>
                    <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
                    <div className='space-x-6 mt-16'>
                        <a href="#Projects" className='border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition'>Projects</a>
                        <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition'>Contact Us</a>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}

export default Header