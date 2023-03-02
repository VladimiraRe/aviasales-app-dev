import { getHours, getMinutes, add } from 'date-fns';

interface IObjTime {
    hours: number;
    minutes: number;
}

const minInHour = 60;
const zero = (time: number) => (time < 10 ? '0' : '');

function useArrivalTime(min: number): string {
    if (min < minInHour) return `00ч ${zero(min)}${min}м`;
    const { minutes, hours } = countMinHours(min);
    return `${hours}ч ${zero(minutes)}${minutes}м`;
}

function useTravelTime(stringDate: string, duration: number) {
    const formatTime = (date: Date) => {
        const hours = getHours(date);
        const minutes = getMinutes(date);
        return `${zero(hours)}${hours}:${zero(minutes)}${minutes}`;
    };

    const startDate = new Date(stringDate);
    const endDate = add(startDate, { minutes: duration });

    return `${formatTime(startDate)} - ${formatTime(endDate)}`;
}

function countMinHours(min: number): IObjTime {
    const minutes = min % minInHour;
    const hours = (min - minutes) / minInHour;
    return { minutes, hours };
}

export { useArrivalTime, useTravelTime };
