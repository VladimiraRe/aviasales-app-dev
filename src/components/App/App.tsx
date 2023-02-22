import type { ITicket } from '../../ interfaces/app.interfaces';
import './App.scss';
import Sorting from '../Sorting';
import CardsSet from '../CardsSet';
import Filter from '../Filter';
import Button from '../Button';
import Head from '../Head';

import useResize from './useResize';

export default function App() {
    const width = useResize();

    const filterTest = [
        { filterName: 'все', isChecked: true },
        { filterName: 'без пересадок', isChecked: false },
    ];

    const ticket: ITicket = {
        price: 13400,
        carrier: 'string',
        segments: [
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '20.03.2023 10:45',
                stops: ['HKG', 'JNB'],
                duration: 1275,
            },
            {
                origin: 'HKT',
                destination: 'MOW',
                date: '20.04.2023 11:20',
                stops: ['HKG'],
                duration: 810,
            },
        ],
    };

    const tickets = [1, 2, 3, 4, 5].map(() => ticket);

    return (
        <div className='app'>
            <Head />
            <div className='app__wrap'>
                <Filter filter={filterTest} onChange={() => null} isMobile={width < 768} />
                <div className='app__wrap'>
                    <Sorting value='cheap' isMobile={width < 431} />
                    <CardsSet tickets={tickets} />
                    <Button text='Показать еще 5 билетов!' onClick={() => null} isHidden={false} />
                </div>
            </div>
        </div>
    );
}
