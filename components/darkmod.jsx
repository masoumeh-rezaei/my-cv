'use client';

import { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDark;
        setIsDark(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full   hover:scale-105 transition-transform"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsSunFill size={20} className="text-yellow-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsMoonFill size={20} className=" text-gray-300" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

export default DarkModeToggle;
