import { v1 as uuidv1 } from 'uuid';

import type { ticketsSegmentType } from '../../type';

import './Card.scss';
import CardItem from './CardItem';
import { useArrivalTime, useTravelTime } from './useCardTime';

export default function CardList({ info }: { info: ticketsSegmentType[] }) {
    const item = [...useCardList(info[0]), ...useCardList(info[1])].map((el) => (
        <li key={uuidv1()}>
            <CardItem title={el[0]} info={el[1]} />
        </li>
    ));

    return <ul className='card__list card__wrap'>{item}</ul>;
}

function useCardList({ origin, destination, date, stops, duration }: ticketsSegmentType) {
    const firstTitle = `${origin} - ${destination}`;
    const thirdTitle = createStopsTitle(stops.length);

    return [
        [firstTitle, useTravelTime(date, duration)],
        ['В пути', useArrivalTime(duration)],
        [thirdTitle, stops.join(', ')],
    ];
}

function createStopsTitle(numberOfStops: number) {
    if (numberOfStops === 1) return '1 пересадка';
    if (numberOfStops > 1 && numberOfStops <= 4) return `${numberOfStops} пересадки`;
    return `${numberOfStops} пересадок`;
}
