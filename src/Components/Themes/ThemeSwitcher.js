// app/Components/Themes/ThemeSwitcher.js
"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="theme-switcher">
            <Switch 
                defaultSelected 
                size='lg' 
                color='success' 
                onClick={handleTheme} 
                startContent={<SunIcon />} 
                endContent={<MoonIcon />}
            />
        </div>
    );
}

export default ThemeSwitcher;
