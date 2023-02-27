import type { stopsFilter, setStopsFilter } from './store/stopsFilter/actions';
import type store from './store/store';
import type reducer from './store/reducer';

type inferValuesType<T> = T extends { [key: string]: infer U } ? U : never;

export type ticketsSegmentType = {
    // Код города (iata)
    origin: string;
    // Код города (iata)
    destination: string;
    // Дата и время вылета туда
    date: string;
    // Массив кодов (iata) городов с пересадками
    stops: string[];
    // Общее время перелёта в минутах
    duration: number;
};

export type ticketType = {
    // Цена в рублях
    price: number;
    // Код авиакомпании (iata)
    carrier: string;
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [ticketsSegmentType, ticketsSegmentType];
};

export type rootState = ReturnType<typeof reducer>;
export type storeType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export type actionType = (...args: { [key in string]: unknown }[]) => {
    type: string;
    [key in string]: unknown;
};

export type stopsFilterType = keyof typeof stopsFilter;
export type stopsFilterActionType = ReturnType<typeof setStopsFilter>;
