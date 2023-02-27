import { v1 as uuidv1 } from 'uuid';

import type { ticketType } from '../../type';
import './CardsSet.scss';
import Card from '../Card';

export default function CardsSet({ tickets }: { tickets: ticketType[] | null }) {
    if (!tickets) return null;
    const items = createList(tickets);

    return <ul className='cardsSet'>{items}</ul>;
}

function createList(arr: ticketType[]): JSX.Element[] {
    return arr.map((ticket) => (
        <li key={uuidv1()}>
            <Card ticket={ticket} />
        </li>
    ));
}
