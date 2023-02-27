import type { ticketType } from '../../type';

import './Card.scss';
import CardList from './CardList';

export default function Card({ ticket }: { ticket: ticketType }) {
    const { price, carrier, segments } = ticket;

    return (
        <article className='card'>
            <div>
                <span className='card__price'>{price} Р</span>
            </div>
            <CardList info={segments[0]} />
            <CardList info={segments[1]} />
        </article>
    );
}
