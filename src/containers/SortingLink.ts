import { connect } from 'react-redux';

import type { storeType, appDispatch, sortingType } from '../type';
import { setSorting } from '../store/ticketVisibility/actions';
import Sorting from '../components/Sorting';

const mapStateToProps = (state: storeType, { isMobile }: { isMobile: boolean }) => ({
    sorting: state.sorting,
    isMobile,
});

const mapDispatchToProps = (dispatch: appDispatch) => ({
    onClick: (value: sortingType) => dispatch(setSorting(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
