import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const values = [
    { id: 'Excellence', title: 'Excellence', desc: "We're committed to delivering the highest quality in everything we do, from code to client relationships.", icon: '⭐' },
    { id: 'Innovation', title: 'Innovation', desc: "We embrace new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions.", icon: '💡' },
    { id: 'Partnership', title: 'Partnership', desc: "We believe in collaborative relationships built on trust, transparency, and mutual success.", icon: '🤝' },
    { id: 'Agility', title: 'Agility', desc: "We adapt quickly to changing requirements and market conditions, ensuring rapid delivery without compromising quality.", icon: '⚡' },
    { id: 'Impact', title: 'Impact', desc: "We measure our success by the positive impact we create for our clients, teams, and communities.", icon: '🎯' },
    { id: 'Integrity', title: 'Integrity', desc: "We operate with honesty and ethical standards in all our business practices and client engagements.", icon: '⚖️' }
];

const ValuesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % values.length);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[500px] w-full max-w-6xl mx-auto gap-12 py-12 px-6">
            {/* Left Side: The Queue */}
            <div className="flex flex-row md:flex-col gap-6 items-center">
                {values.map((val, idx) => (
                    <motion.div
                        key={val.id}
                        onClick={() => setCurrentIndex(idx)}
                        animate={{
                            scale: currentIndex === idx ? 1.25 : 1,
                            x: currentIndex === idx ? 20 : 0,
                            backgroundColor: currentIndex === idx ? '#5e0066' : 'rgba(150, 111, 214, 0.1)',
                            borderColor: currentIndex === idx ? '#5e0066' : 'rgba(150, 111, 214, 0.3)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer shadow-lg overflow-hidden group"
                    >
                        <span className={`text-2xl transition-colors ${currentIndex === idx ? 'text-white' : 'text-purple-600'}`}>
                            {val.icon}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Center/Right: The Focus */}
            <div className="flex-1 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={values[currentIndex].id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        className="w-full max-w-xl p-10 bg-white/80 backdrop-blur-xl rounded-[40px] border border-purple-100 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <motion.h3
                                className="text-5xl font-extrabold mb-6 bg-gradient-to-br from-purple-800 to-purple-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {values[currentIndex].title}
                            </motion.h3>
                            <motion.p
                                className="text-xl text-slate-600 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {values[currentIndex].desc}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ValuesCarousel;
