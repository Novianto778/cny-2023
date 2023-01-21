import { useEffect, useRef, useState } from 'react';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
// import audio from './assets/bgm.mp3';

function App() {
    // let bgm = new Audio(audio);
    const audioRef = useRef<HTMLAudioElement>(null);

    const start = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div
            className="h-full w-screen overflow-hidden"
            onMouseEnter={start}
            onMouseMove={start}
            onClick={start}
        >
            <audio ref={audioRef} src="/bgm.mp3" loop autoPlay />
            <button
                className="fixed top-4 left-1/2 -translate-x-1/2 bg-primary text-white z-50 text-xs px-4 py-2 rounded-2xl"
                onClick={start}
            >
                Play Audio
            </button>
            <Hero1 />
            <Hero2 />
        </div>
    );
}

export default App;
