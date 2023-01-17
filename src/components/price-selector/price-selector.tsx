import styles from './price-selector.module.scss';
import { RangeSlider } from '../range-slider/range-slider';

export interface PriceSelectorProps {
    className?: string;
}

export const PriceSelector = ({ className }: PriceSelectorProps) => {
    return (
        <div className={`${className} ${styles.priceSelector}`}>
            <div className={styles.pageViewContainer}>
                <div className={styles.pageView}>100K PAGEVIEWS</div>
                <div className={styles.price}>$16.00 <span>/ month</span></div></div>
            <RangeSlider />
        </div>
    );
};
