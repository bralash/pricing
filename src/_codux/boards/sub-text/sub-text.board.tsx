import { createBoard } from '@wixc3/react-board';
import { SubText } from '../../../components/sub-text/sub-text';

export default createBoard({
    name: 'SubText',
    Board: () => <SubText />
});
