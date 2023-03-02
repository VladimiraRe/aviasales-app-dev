import { connect } from 'react-redux';

import type { stopsFilterType, storeType, appDispatch } from '../type';
import { setStopsFilter } from '../store/ticketVisibility/actions';
import StopsFilterItem from '../components/StopsFilter/StopsFilterItem';

const mapStateToProps = (state: storeType, ownProps: { filter: stopsFilterType }) => ({
    isChecked: !!state.stopsFilter.find((el) => el === ownProps.filter),
});

const mapDispatchToProps = (dispatch: appDispatch, ownProps: { filter: stopsFilterType }) => ({
    onClick: () => dispatch(setStopsFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilterItem);
