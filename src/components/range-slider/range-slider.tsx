import styles from './range-slider.module.scss';

export interface RangeSliderProps {
    className?: string;
}

export const RangeSlider = ({ className }: RangeSliderProps) => {
    return <div className={`${styles.rangeSlider} ${className}`}>
        <input type='range' />
    </div>;
};
