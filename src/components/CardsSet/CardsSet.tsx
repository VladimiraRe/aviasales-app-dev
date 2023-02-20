import { v1 as uuidv1 } from 'uuid';

import type { ITicket } from '../../ interfaces/app.interfaces';
import './CardsSet.scss';
import Card from '../Card';

export default function CardsSet({ tickets }: { tickets: ITicket[] }) {
    const items = createList(tickets);

    return <ul className='cardsSet'>{items}</ul>;
}

function createList(arr: ITicket[]): JSX.Element[] {
    return arr.map((ticket) => (
        <li key={uuidv1()}>
            <Card ticket={ticket} />
        </li>
    ));
}
