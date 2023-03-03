import type { ticketType } from '../type';

export interface IServerError {
    error: false | { url: string; status: number };
}

export interface ISearchId extends IServerError {
    searchId: string;
}

export interface IGetTickets extends IServerError {
    tickets: ticketType[];
    stop: boolean;
}

export default class AviasalesDB {
    _baseUrl = 'https://aviasales-test-api.kata.academy';

    async getSearchId() {
        const request = 'search';
        const { searchId, error } = await this._get<ISearchId>(request);
        return { searchId, error };
    }

    async getTickets(searchId: string): Promise<IGetTickets> {
        const request = `tickets?searchId=${searchId}`;
        const { tickets, stop, error } = await this._get<IGetTickets>(request);
        return { tickets, stop, error };
    }

    async _get<T>(request: string): Promise<T> {
        const url = `${this._baseUrl}/${request}`;
        let res = await fetch(url);
        if (!res.ok) return { error: { url, status: res.status } } as T;
        res = await res.json();
        return { ...res, error: false } as T;
    }
}
