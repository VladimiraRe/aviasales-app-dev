import { v1 as uuidv1 } from 'uuid';

import type { ISegment } from '../../ interfaces/app.interfaces';

import './Card.scss';
import CardItem from './CardItem';
import { useArrivalTime } from './useCardTime';

export default function CardList({ info }: { info: ISegment }) {
    const item = useCardInfoList(info);
    return <ul className='card__list card__wrap'>{item}</ul>;
}

function useCardInfoList({ origin, destination, date, stops, duration }: ISegment): JSX.Element[] {
    const firstTitle = `${origin} - ${destination}`;

    const transfers = stops.length;
    let thirdTitle: string;
    if (transfers === 1) thirdTitle = '1 пересадка';
    else if (transfers > 1 && transfers <= 4) thirdTitle = `${transfers} пересадки`;
    else thirdTitle = `${transfers} пересадок`;

    return [
        [firstTitle, date],
        ['В пути', useArrivalTime(duration)],
        [thirdTitle, stops.join(', ')],
    ].map((el) => (
        <li key={uuidv1()}>
            <CardItem title={el[0]} info={el[1]} />
        </li>
    ));
}
