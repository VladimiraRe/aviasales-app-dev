interface ISupport {
    filterName: string;
    isChecked: boolean;
}
type Func = () => void;

export interface IFilterType {
    filter: ISupport[];
    onChange: Func;
}
export interface IFilterItem extends ISupport {
    onChange: Func;
}
