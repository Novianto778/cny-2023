import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Hero1 = (props: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const elementHeight = scrollRef.current?.clientHeight;
    const [height, setHeight] = React.useState(0);
    const isBottomOfPage = height >= elementHeight!;

    useEffect(() => {
        const event = window?.addEventListener('scroll', () => {
            setHeight(window.scrollY);
        });

        return () => {
            window?.removeEventListener('scroll', event as any);
        };
    }, []);

    return (
        <div className="h-screen w-full bg-primary" ref={scrollRef}>
            <div className="h-full">
                <div className="relative h-[30%]">
                    <motion.img
                        src="/hero1/border-left.png"
                        alt=""
                        className="w-32 absolute -top-4 -left-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -10,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                    />
                    <motion.img
                        src="/hero1/border-right.png"
                        alt=""
                        className="w-32 absolute -top-4 -right-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 10,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                    />
                </div>
                <div className="h-[50%]">
                    <div className="relative">
                        <motion.img
                            src="/hero1/flower-left.png"
                            alt=""
                            className="w-48 md:w-96 absolute -left-10 md:-top-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: false,
                                amount: 0.1,
                            }}
                            transition={{ duration: 2 }}
                            variants={{
                                hidden: {
                                    // opacity: 0,
                                    x: -100,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                        />
                        <motion.img
                            src="/hero1/flower-right.png"
                            alt=""
                            className="w-48 md:w-96 absolute -right-10 md:-top-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 2 }}
                            variants={{
                                hidden: {
                                    // opacity: 0,
                                    x: 100,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                        />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <motion.h1
                            className="text-4xl font-heading hero1-heading text-center relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0 }}
                            transition={{ duration: 1.0, delay: 0.5 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                },
                                visible: {
                                    opacity: 1,
                                },
                            }}
                        >
                            Happy <br /> Chinese New Year
                        </motion.h1>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0 }}
                            transition={{ duration: 1.0 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                        >
                            <div className="flex flex-col justify-center items-center relative">
                                <h6 className="text-3xl md:text-5xl text-white font-bold absolute top-[30%] hero1-heading">
                                    2023
                                </h6>
                                <img
                                    src="/hero1/fan.png"
                                    alt=""
                                    className="w-60"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="h-[20%]">
                    <motion.div
                        className="h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -50,
                                position: 'absolute',
                                bottom: -100,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                position: 'relative',
                                bottom: 0,
                            },
                        }}
                    >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                            <img
                                src="/hero1/flower.png"
                                alt=""
                                className="h-40 md:h-32 object-contain bg-cover"
                            />
                        </div>
                        <div className={`${isBottomOfPage ? 'hidden' : ''}`}>
                            <motion.img
                                src="/hero1/frame-left.png"
                                alt=""
                                className="w-48 absolute -bottom-12 -left-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                    root: scrollRef,
                                }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: -10,
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                    },
                                }}
                            />
                            <motion.img
                                src="/hero1/frame-right.png"
                                alt=""
                                className="w-48 absolute -bottom-12 -right-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                    root: scrollRef,
                                }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: 10,
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                    },
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
