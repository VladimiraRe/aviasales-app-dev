import type { ITicket } from '../../ interfaces/app.interfaces';

import './Card.scss';
import CardList from './CardList';

export default function Card({ ticket }: { ticket: ITicket }) {
    const { price, carrier, segments } = ticket;

    return (
        <div className='card'>
            <div>
                <span className='card__price'>{price} Р</span>
            </div>
            <CardList info={segments[0]} />
            <CardList info={segments[1]} />
        </div>
    );
}
