import styles from './bottom-sheet.module.scss';

export interface BottomSheetProps {
    className?: string;
}

export const BottomSheet = ({ className }: BottomSheetProps) => {
    return (
        <div className={`${styles.root} ${className} ${styles.bottomSheet}`}>
            <ul className={styles.ul}>
                <li>
                    <span>Unlimited websites</span>
                </li>
                <li>
                    <span>100% data ownership</span>
                </li>
                <li>
                    <span>Email reports</span>
                </li>
            </ul>
            <a href="/" className={`${styles.startTrial}`}>Start my trial</a>
        </div>
    );
};
