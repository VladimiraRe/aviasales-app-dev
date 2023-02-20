interface IObjTime<T> {
    hours?: T;
    minutes: T;
}

function useArrivalTime(min: number): string {
    const minInHour = 60;

    if (min < minInHour) return `0ч ${min}м`;

    const arrivalTime: IObjTime<number> = { minutes: min % 60 };
    arrivalTime.hours = (min - arrivalTime.minutes) / 60;

    return `${arrivalTime.hours}ч ${arrivalTime.minutes}м`;
}

// function useTravelTime() {

// }

// eslint-disable-next-line import/prefer-default-export
export { useArrivalTime };
