import { createBoard } from '@wixc3/react-board';
import { RangeSlider } from '../../../components/range-slider/range-slider';

export default createBoard({
    name: 'RangeSlider',
    Board: () => <RangeSlider />
});
