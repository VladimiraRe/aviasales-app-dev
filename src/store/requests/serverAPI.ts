import type { ticketType } from '../../type';

interface ISearchId {
    searchId: string;
}

interface IGetTickets {
    tickets: ticketType[];
    stop: boolean;
}

export default class AviasalesDB {
    _baseUrl = 'https://aviasales-test-api.kata.academy';

    async getSearchId() {
        const request = 'search';
        const { searchId } = await this._get<ISearchId>(request);
        return searchId;
    }

    async getTickets(searchId: string, cb: (tickets: ticketType[]) => void): Promise<boolean> {
        const request = `tickets?searchId=${searchId}`;
        const { tickets, stop } = await this._get<IGetTickets>(request);
        if (stop) return true;
        cb(tickets);
        return this.getTickets(searchId, cb);
    }

    async _get<T>(request: string): Promise<T> {
        const url = `${this._baseUrl}/${request}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`Couldn't fetch ${url}, response status: ${res.status}`);
        res = await res.json();
        return res as T;
    }
}
