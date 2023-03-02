import { useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

import type { ticketsType, ticketType, storeType } from '../../type';
import './CardsSet.scss';
import Card from '../Card';

export default function CardsSet({ tickets }: { tickets: ticketsType }) {
    const displayedTickets = useSelector((state: storeType) => state.displayedTickets) || 5;

    if (!tickets) return null;

    const items = createList(tickets.slice(0, displayedTickets));

    return <ul className='cardsSet'>{items}</ul>;
}

function createList(arr: ticketType[]): JSX.Element[] {
    return arr.map((ticket) => (
        <li key={uuidv1()}>
            <Card ticket={ticket} />
        </li>
    ));
}
