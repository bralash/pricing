import styles from './container.module.scss';
import { BottomSheet } from '../bottom-sheet/bottom-sheet';
import { PriceSelector } from '../price-selector/price-selector';

export interface ContainerProps {
    className?: string;
}

export const Container = ({ className }: ContainerProps) => {
    return <div className={`${styles.root} ${className}`}>
        <PriceSelector />
        <BottomSheet />
    </div>;
};
