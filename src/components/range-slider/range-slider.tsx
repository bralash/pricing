/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './range-slider.module.scss';

export interface RangeSliderProps {
    className?: string;
}

export const RangeSlider = ({ className }: RangeSliderProps) => {
    return (
        <div className={`${styles.rangeSlider} ${className}`}>
            <input type="range" min="0" max="100" value="50" onChange={()=>{}} className="slider" />
        </div>
    );
};
