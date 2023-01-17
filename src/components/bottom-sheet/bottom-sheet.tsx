import styles from './bottom-sheet.module.scss';

export interface BottomSheetProps {
    className?: string;
}

export const BottomSheet = ({ className }: BottomSheetProps) => {
    return <div className={`${styles.root} ${className} ${styles.bottomSheet}`}>
        <ul className={styles.ul}><li>Unlimited websites</li><li>100% data ownership</li><li>Email reports</li></ul>
        <button>Button</button>
    </div>;
};
