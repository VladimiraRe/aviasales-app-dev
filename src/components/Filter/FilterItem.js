import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

export default function FilterItem({ name, isChecked, onChange }) {
    return (
        <div>
            <Checkbox checked={isChecked} onChange={onChange}>
                {name}
            </Checkbox>
        </div>
    );
}

FilterItem.defaultProps = {
    name: null,
    isChecked: false,
    onChange: () => null,
};

FilterItem.propTypes = {
    name: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
};
