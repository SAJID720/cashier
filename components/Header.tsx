
import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="bg-primary-dark shadow-md">
            <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <LogoIcon className="h-10 w-10 text-accent"/>
                    <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-wide">
                        Unique Spot
                    </h1>
                </div>
                <div className="text-right">
                    <p className="text-white font-semibold text-lg">{currentTime.toLocaleTimeString()}</p>
                    <p className="text-secondary text-sm">{currentTime.toLocaleDateString()}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
