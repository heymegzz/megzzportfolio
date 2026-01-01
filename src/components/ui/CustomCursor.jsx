import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    // Much stiffer spring for instant response
    const springConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const lineLength = 10; // Fixed size, no change on hover
    const lineColor = isHovering ? '#E63946' : '#ffffff';

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%"
            }}
            animate={{
                rotate: isHovering ? 45 : 0
                // No scale change - keeps same size
            }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
            {/* Crosshair Lines */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                {/* Vertical Line - Top */}
                <line
                    x1="14" y1={14 - lineLength}
                    x2="14" y2="12"
                    stroke={lineColor}
                    strokeWidth="1.5"
                />
                {/* Vertical Line - Bottom */}
                <line
                    x1="14" y1="16"
                    x2="14" y2={14 + lineLength}
                    stroke={lineColor}
                    strokeWidth="1.5"
                />

                {/* Horizontal Line - Left */}
                <line
                    x1={14 - lineLength} y1="14"
                    x2="12" y2="14"
                    stroke={lineColor}
                    strokeWidth="1.5"
                />
                {/* Horizontal Line - Right */}
                <line
                    x1="16" y1="14"
                    x2={14 + lineLength} y2="14"
                    stroke={lineColor}
                    strokeWidth="1.5"
                />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
