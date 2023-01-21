import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Hero3 = (props: Props) => {
    return (
        <div className="hero3 h-screen bg-secondary">
            <div className="h-full relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 1.0, delay: 1.5 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    className="relative h-full flex justify-center items-center z-50"
                >
                    <div className="font-primary text-white  flex flex-col items-center justify-center">
                        <img
                            src="/hero3/rabbit.png"
                            alt=""
                            className="w-1/2 md:w-1/3"
                        />
                        <h6 className="text-2xl md:text-3xl uppercase mt-2">
                            Chinese New Year
                        </h6>
                        <h1 className="text-6xl md:text-9xl font-bold">2023</h1>
                        <div className="bg-white h-0.5 w-2/3 md:w-1/2" />
                        <h6 className="text-xl md:text-2xl font-light uppercase mt-4">
                            The year of rabbit
                        </h6>
                        <div className="text-center w-2/3 md:w-1/2 mt-4">
                            <p className="leading-5 font-light">
                                Happy New Year! May all your wishes come true!
                            </p>
                            <p className="leading-5 font-light">
                                May this new year be filled with happiness,
                                prosperity, and many precious moments with your
                                loved ones.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
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
                    className="absolute top-0 left-20 leftright z-30"
                >
                    <img
                        src="/hero3/lamp-1.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-28 md:top-40 left-32 leftright z-30"
                >
                    <img
                        src="/hero3/cloud-1.png"
                        alt=""
                        className="w-10 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-32 md:top-52 left-36 md:left-48 leftright z-30"
                >
                    <img
                        src="/hero3/cloud-2.png"
                        alt=""
                        className="w-10 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -top-10 left-20 leftright"
                >
                    <img
                        src="/hero3/flower-1.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-0 left-28 md:left-40 leftright"
                >
                    <img
                        src="/hero3/lamp-2.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-20 -left-10"
                >
                    <img
                        src="/hero3/pattern-1.png"
                        alt=""
                        className="w-20 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-48 -left-10"
                >
                    <img
                        src="/hero3/flower-2.png"
                        alt=""
                        className="w-20 md:w-48"
                    />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 1.0, delay: 1 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    className="absolute bottom-20 md:bottom-0 -left-12 z-30"
                >
                    <img
                        src="/hero3/fan.png"
                        alt=""
                        className="w-36 md:w-64 -rotate-[10deg]"
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -bottom-12 left-24 md:left-32 z-10"
                >
                    <img
                        src="/hero3/flower-3.png"
                        alt=""
                        className="w-24 md:w-44"
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -bottom-14 left-72"
                >
                    <img
                        src="/hero3/fan.png"
                        alt=""
                        className="w-28 md:w-44 rotate-[90deg] scale-x-[-1]"
                    />
                </motion.div>
                {/* right side */}
                <motion.div
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
                    className="absolute top-0 right-20 leftright z-30"
                >
                    <img
                        src="/hero3/lamp-1.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-28 md:top-40 right-32 leftright z-30"
                >
                    <img
                        src="/hero3/cloud-1.png"
                        alt=""
                        className="w-10 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-32 md:top-52 right-36 md:right-48 leftright z-30"
                >
                    <img
                        src="/hero3/cloud-2.png"
                        alt=""
                        className="w-10 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -top-10 right-20 leftright"
                >
                    <img
                        src="/hero3/flower-1.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-0 right-28 md:right-40 leftright"
                >
                    <img
                        src="/hero3/lamp-2.png"
                        alt=""
                        className="w-10 md:w-20 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-20 -right-10"
                >
                    <img
                        src="/hero3/pattern-1.png"
                        alt=""
                        className="w-20 md:w-32 "
                    />
                </motion.div>
                <motion.div
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
                    className="absolute top-48 -right-10"
                >
                    <img
                        src="/hero3/flower-2.png"
                        alt=""
                        className="w-20 md:w-48"
                    />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 1.0, delay: 1 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 50,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                        },
                    }}
                    className="absolute bottom-20 md:bottom-0 -right-12 z-30"
                >
                    <img
                        src="/hero3/fan.png"
                        alt=""
                        className="w-36 md:w-64 -rotate-[10deg] scale-x-[-1]"
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -bottom-12 right-24 md:right-32 z-10"
                >
                    <img
                        src="/hero3/flower-3.png"
                        alt=""
                        className="w-24 md:w-44"
                    />
                </motion.div>
                <motion.div
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
                    className="absolute -bottom-14 right-72"
                >
                    <img
                        src="/hero3/fan.png"
                        alt=""
                        className="w-28 md:w-44 rotate-[-90deg]"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero3;
