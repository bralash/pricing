import styles from './sub-text.module.scss';

export interface SubTextProps {
    className?: string;
}

export const SubText = ({ className }: SubTextProps) => {
    return <div className={`${styles.root} ${className} ${styles['sub-text']}`}>Sign-up for our 30-day trial. No credit card required</div>;
};
