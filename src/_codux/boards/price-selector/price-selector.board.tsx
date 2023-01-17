import { createBoard } from '@wixc3/react-board';
import { PriceSelector } from '../../../components/price-selector/price-selector';

export default createBoard({
    name: 'PriceSelector',
    Board: () => <PriceSelector />
});
