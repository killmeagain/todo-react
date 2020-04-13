import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import { SET_TEXTFIELD_AC } from '../../redux/action-creators/action-creators';
import { setTask } from '../../redux/thunk-creators/thunk-creators';

const mapStateToProps = state => ({
    textfield: state.app.textfield,
});

const mapDispatchToProps = dispatch => ({
    setTextfield: text => {
        dispatch(SET_TEXTFIELD_AC(text));
    },

    setTask: title => {
        dispatch(setTask(title));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);