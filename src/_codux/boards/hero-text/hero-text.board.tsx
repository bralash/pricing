import { createBoard } from '@wixc3/react-board';
import { HeroText } from '../../../components/hero-text/hero-text';
import HeroText_module from '../../../components/hero-text/hero-text.module.scss';

export default createBoard({
    name: 'HeroText',
    Board: () => <HeroText className={HeroText_module.hero}></HeroText>
});
