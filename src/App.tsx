
import styles from './App.module.scss';
import { HeroText } from './components/hero-text/hero-text';
import { SubText } from './components/sub-text/sub-text';
import { Container } from './components/container/container';

function App() {
    return (
        <div className={styles.App}>
            <HeroText />
            <SubText />
            <Container />
        </div>
    );
}

export default App;
