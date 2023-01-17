/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './range-slider.module.scss';

export interface RangeSliderProps {
    className?: string;
}

export const RangeSlider = ({ className }: RangeSliderProps) => {
    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <div className={`${styles.rangeSlider} ${className}`}>
            <input type="range" min={1} max={100} onChange={getValue} className="slider" />
        </div>
    );
};
