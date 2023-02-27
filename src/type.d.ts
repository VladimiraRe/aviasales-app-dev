import type { stopsFilter, setStopsFilter } from './store/stopsFilter/actions';
import type { sorting, setSorting } from './store/sorting/actions';
import type store from './store/store';

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
export type ticketsType = ticketType[] | [] | null;

export type onClickType<T = void, S = void> = ((value: T) => S) | (() => S);

export type rootState = ReturnType<typeof reducer>;
export type storeType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export type stopsFilterType = keyof typeof stopsFilter;
export type stopsFilterActionType = ReturnType<typeof setStopsFilter>;

export type sortingType = keyof typeof sorting;
export type sortingActionType = ReturnType<typeof setSorting>;
