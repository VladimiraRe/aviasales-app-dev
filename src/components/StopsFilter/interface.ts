export interface ISupport {
    filterName: string;
    isChecked: boolean;
}
type Func = () => void;

export interface IFilterType {
    filter: ISupport[];
    onChange: Func;
    isMobile?: boolean;
}
export interface IFilterItem extends ISupport {
    onChange: Func;
}
