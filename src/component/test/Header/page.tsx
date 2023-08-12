import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Header from '../../header/Header';

export const BackGroundHeader: React.FC = () => {
    const [isCursorInside, setIsCursorInside] = useState(false);

    const update = (e: any) => {
        e.preventDefault(); // Prevent default touch behavior
        if (isCursorInside) {
            var x = e.clientX || e.touches[0].clientX;
            var y = e.clientY || e.touches[0].clientY;

            document.documentElement.style.setProperty('--cursorX', x + 'px');
            document.documentElement.style.setProperty('--cursorY', y + 'px');
        }
    };

    const handleMouseLeave = () => {
        setIsCursorInside(false);
        document.documentElement.style.setProperty('--cursorX', '0px'); // Reset to initial value
        document.documentElement.style.setProperty('--cursorY', '0px'); // Reset to initial value
    };

    useEffect(() => {
        document.addEventListener('mousemove', update);
        document.addEventListener('touchmove', update);

        return () => {
            document.removeEventListener('mousemove', update);
            document.removeEventListener('touchmove', update);
        };
    }, [isCursorInside]);

    return (
        <div
            className={styles.dad}
            onMouseEnter={() => setIsCursorInside(true)}
            onMouseLeave={handleMouseLeave}
            onTouchMove={() => setIsCursorInside(true)} // Change to onTouchMove
        >
            <div className={styles.front}>
                <Header />
            </div>
            <div id="check" className={styles.back}>
                <img src="https://picsum.photos/1200/500?random=1" alt="" />
            </div>
        </div>
    );
};
