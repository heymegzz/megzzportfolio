import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    { id: 1, text: "INITIALIZING CORE", duration: 600 },
    { id: 2, text: "BUILDING MODULES", duration: 800 },
    { id: 3, text: "OPTIMIZING ASSETS", duration: 700 },
    { id: 4, text: "READY", duration: 500 }
];

const Loader = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        let timer;
        let totalDuration = 0;

        // Calculate total duration for progress bar
        const fullTime = steps.reduce((acc, step) => acc + step.duration, 0);

        // Step Sequencer
        const sequenceStep = (index) => {
            if (index >= steps.length) {
                // Completion
                setTimeout(() => setIsExiting(true), 200);
                setTimeout(onComplete, 800);
                return;
            }

            setCurrentStep(index);

            timer = setTimeout(() => {
                sequenceStep(index + 1);
            }, steps[index].duration);
        };

        sequenceStep(0);

        // Smooth Progress Bar
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100;
                return prev + (100 / (fullTime / 20)); // Approximate increment
            });
        }, 20);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        }
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ backgroundColor: '#050505' }} // Failsafe
        >
            <div className="w-[300px] md:w-[400px] relative">
                {/* Status Text */}
                <div className="flex justify-between items-end mb-4 h-6">
                    <span className="font-mono text-xs md:text-sm tracking-widest text-white/90">
                        {steps[currentStep]?.text || "SYSTEM READY"}
                    </span>
                    <span className="font-mono text-xs text-white/50">
                        {Math.min(100, Math.floor(progress))}%
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                    {/* Active Progress Line */}
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
