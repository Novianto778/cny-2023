import { useEffect, useRef } from 'react';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import AnimationContainer from './components/AnimationContainer';

function App() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const start = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="app h-full w-screen overflow-hidden" onClick={start}>
            <audio ref={audioRef} src="/bgm.mp3" loop autoPlay />
            <button
                className="fixed top-4 left-1/2 -translate-x-1/2 bg-primary text-white z-50 text-xs px-4 py-2 rounded-2xl focus:outline-none focus:border-none"
                onClick={start}
            >
                Play Audio
            </button>
            <AnimationContainer>
                {/* <div className="hero"></div> */}
                <Hero1 />
                <Hero2 />
                <Hero3 />
            </AnimationContainer>
        </div>
    );
}

export default App;
