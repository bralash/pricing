import styles from './hero-text.module.scss';

export interface HeroTextProps {
    className?: string;
}

export const HeroText = ({ className }: HeroTextProps) => {
    return <div className={`${className} ${styles['hero']}`}>Simple, traffic-based pricing</div>;
};
