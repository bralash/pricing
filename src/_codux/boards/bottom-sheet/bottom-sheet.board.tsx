import { createBoard } from '@wixc3/react-board';
import { BottomSheet } from '../../../components/bottom-sheet/bottom-sheet';
import BottomSheet_module from '../../../components/bottom-sheet/bottom-sheet.module.scss';

export default createBoard({
    name: 'BottomSheet',
    Board: () => <BottomSheet className={BottomSheet_module.bottomSheet} />
});
