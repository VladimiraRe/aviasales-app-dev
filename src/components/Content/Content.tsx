import Sorting from '../Sorting';
import VisibleTickets from '../../containers/VisibleTickets';
import Button from '../Button';

export default function Content({ width }: { width: number }) {
    return (
        <>
            <Sorting value='cheap' isMobile={width < 431} />
            <VisibleTickets />
            <Button text='Показать еще 5 билетов!' onClick={() => null} isHidden={false} />
        </>
    );
}
