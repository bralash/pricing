import styles from './price-selector.module.scss';

export interface PriceSelectorProps {
    className?: string;
}

export const PriceSelector = ({ className }: PriceSelectorProps) => {
    return <div className={`${className} ${styles.priceSelector}`}></div>;
};
