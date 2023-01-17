import styles from './hero-text.module.scss';
import circles from './pattern-circles.svg';

export interface HeroTextProps {
    className?: string;
}

export const HeroText = ({ className }: HeroTextProps) => {
    return (
        <div className={`${className} ${styles['hero']}`}>
            <img src={circles} alt="Circles" />
            Simple, traffic-based pricing
        </div>
    );
};
