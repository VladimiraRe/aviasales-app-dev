import type { errorsType, errorsObjType, actionsType } from '../../type';

export default function hasError(state: errorsObjType = {}, action: actionsType) {
    switch (action.type) {
        case 'SET_ERROR': {
            const stateErrorKeys = Object.keys(state) as errorsType[] | [];
            if (stateErrorKeys.find((el) => el === action.error && el === 'networkError')) return state;
            if (stateErrorKeys.find((el) => el === action.error && el === 'componentsError'))
                return { ...state, [action.error]: ((state as errorsObjType)[action.error] as number) + 1 };
            if (stateErrorKeys.find((el) => el === action.error)) return state;
            if (action.error === 'networkError') return { [action.error]: action.error };
            return { ...state, [action.error]: action.error };
        }
        default:
            return state;
    }
}
