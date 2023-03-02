import type { ticketType } from '../../type';

import './Card.scss';
import CardList from './CardList';

export default function Card({ ticket }: { ticket: ticketType }) {
    const { price, carrier, segments } = ticket;
    const baseImgLink = 'https://pics.avs.io/99/36';
    const imgLink = `${baseImgLink}/${carrier}.png`;

    return (
        <article className='card'>
            <div className='card__header'>
                <span className='card__price'>{price} Р</span>
                <img src={imgLink} alt='Airline logo' />
            </div>
            <CardList info={segments} />
        </article>
    );
}
