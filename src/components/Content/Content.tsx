import SortingLink from '../../containers/SortingLink';
import VisibleTickets from '../../containers/VisibleTickets';
import Button from '../Button';

export default function Content({ width }: { width: number }) {
    return (
        <>
            <SortingLink isMobile={width < 431} />
            <VisibleTickets />
            <Button text='Показать еще 5 билетов!' onClick={() => null} isHidden={false} />
        </>
    );
}
