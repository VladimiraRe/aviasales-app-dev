import type { ThunkDispatch } from 'redux-thunk';
import type { Action } from 'redux';

import type store from './store/store';
import * as ticketVisibilityObj from './store/ticketVisibility/actions';
import * as requestActionsObj from './store/requests/actions';
import * as errorsActionsObj from './store/errors/actions';

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
export type appDispatch = ThunkDispatch<storeType, void, Action>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { getTickets, ...requestActions } = requestActionsObj;
const { sortingName, stopsFilterName, ...ticketVisibilityActions } = ticketVisibilityObj;
const { errorPossibleValues, ...errorsActions } = errorsActionsObj;

const actions = {
    ...ticketVisibilityActions,
    ...requestActions,
    ...errorsActions,
} as const;

type actionsType = ReturnType<inferValuesType<typeof actions>>;

export type stopsFilterType = keyof typeof stopsFilterName;
export type sortingType = keyof typeof sortingName;

export type errorsType = (typeof errorPossibleValues)[number];
export type errorsObjType = {
    [key in errorsType]?: errorsType | number;
};
