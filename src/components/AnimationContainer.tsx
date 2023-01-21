import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Props = {
    children: React.ReactNode;
};

const AnimationContainer = ({ children }: Props) => {
    const animationRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        if (!animationRef.current) return;
        gsap.fromTo(
            animationRef.current.children,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: animationRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);
    return (
        <div className="h-full" ref={animationRef}>
            {children}
        </div>
    );
};

export default AnimationContainer;
