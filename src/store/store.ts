import { configureStore } from '@reduxjs/toolkit';

import type { stopsFilterType, ticketType, sortingType } from '../type';

import { stopsFilter } from './stopsFilter/actions';
import { sorting } from './sorting/actions';
import reducers from './reducer';

type stateType = {
    tickets: ticketType[];
    stopsFilter: stopsFilterType[];
    sorting: sortingType;
};

const preloadedState: stateType = {
    tickets: [
        {
            price: 10500,
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
        },
        {
            price: 15700,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: ['JNB'],
                    duration: 500,
                },
                {
                    origin: 'HKT',
                    destination: 'MOW',
                    date: '20.04.2023 11:20',
                    stops: ['HKG'],
                    duration: 200,
                },
            ],
        },
        {
            price: 13400,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: [],
                    duration: 734,
                },
                {
                    origin: 'HKT',
                    destination: 'MOW',
                    date: '20.04.2023 11:20',
                    stops: [],
                    duration: 1640,
                },
            ],
        },
        {
            price: 7800,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: [],
                    duration: 2022,
                },
                {
                    origin: 'HKT',
                    destination: 'MOW',
                    date: '20.04.2023 11:20',
                    stops: ['HKG'],
                    duration: 1380,
                },
            ],
        },
        {
            price: 9200,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: ['HKG', 'JNB'],
                    duration: 520,
                },
                {
                    origin: 'HKT',
                    destination: 'MOW',
                    date: '20.04.2023 11:20',
                    stops: ['HKG'],
                    duration: 980,
                },
            ],
        },
    ],
    stopsFilter: Object.values(stopsFilter),
    sorting: sorting.OPTIMAL,
};

const store = configureStore({
    reducer: reducers,
    preloadedState,
});

export default store;
