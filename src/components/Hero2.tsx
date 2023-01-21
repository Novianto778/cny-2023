import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Hero2 = (props: Props) => {
    return (
        <div className="h-screen w-full bg-hero2 flex relative overflow-hidden">
            <div className="h-full w-full flex flex-col gap-y-8 md:flex-row md:justify-between items-center px-8 max-w-6xl mx-auto relative">
                <div className="py-20 md:py-0">
                    <motion.h1
                        className=" text-black font-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -100,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                    >
                        <span className="text-4xl md:text-5xl font-heading tracking-widest text-white">
                            Year
                        </span>
                        <br />
                        <span className="text-4xl md:text-5xl font-heading text-red-700">
                            <span className="text-5xl md:text-6xl">of the</span>{' '}
                            <br />
                            Rabbit
                        </span>
                    </motion.h1>
                </div>
                <div className="w-2/3 md:w-1/2 relative">
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 100,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                    >
                        <img src="/hero2/hero.png" alt="" />
                    </motion.div>
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -100,
                                y: 10,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                            },
                        }}
                        src="/hero2/left-cloud.png"
                        alt=""
                        className="absolute w-40 md:w-80 top-10 -left-20 bounce"
                    />
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -100,
                                y: 10,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                            },
                        }}
                        src="/hero2/right-cloud.png"
                        alt=""
                        className="absolute w-40 md:w-80 bottom-0 -right-10 bounce z-30"
                    />
                </div>
            </div>
            <div>
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.0, delay: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -100,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    src="/hero2/gold-1.png"
                    alt=""
                    className="w-20 md:w-32 absolute bottom-60 md:bottom-20 left-[20%] md:left-[25%] leftright"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.0, delay: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 100,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    src="/hero2/gold-2.png"
                    alt=""
                    className="w-20 md:w-32 absolute bottom-48 md:bottom-10 left-[45%] md:left-[38%] leftright"
                />
            </div>
            <div>
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 1.0, delay: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -100,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    src="/hero2/frame-left.png"
                    alt=""
                    className="w-48 md:w-72 absolute -bottom-10 -left-10"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 1.0, delay: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 100,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    src="/hero2/frame-right.png"
                    alt=""
                    className="w-48 md:w-72 absolute -bottom-14 -right-16"
                />
            </div>
        </div>
    );
};

export default Hero2;
