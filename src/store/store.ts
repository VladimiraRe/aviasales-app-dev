import { configureStore } from '@reduxjs/toolkit';

import type { stopsFilterType, ticketType } from '../type';

import { stopsFilter } from './stopsFilter/actions';
import reducers from './reducer';

type stateType = {
    tickets: ticketType[];
    stopsFilter: stopsFilterType[];
};

const preloadedState: stateType = {
    tickets: [
        {
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
        },
        {
            price: 13400,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: ['JNB'],
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
            price: 13400,
            carrier: 'string',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: '20.03.2023 10:45',
                    stops: [],
                    duration: 1275,
                },
                {
                    origin: 'HKT',
                    destination: 'MOW',
                    date: '20.04.2023 11:20',
                    stops: [],
                    duration: 810,
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
        },
    ],
    stopsFilter: Object.values(stopsFilter),
};

const store = configureStore({
    reducer: reducers,
    preloadedState,
});

export default store;
