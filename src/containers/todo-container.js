import {connect} from "react-redux";
import {addTodoData} from '../actions';
import TodoComponent from '../components/todo/todo-component';

export const mapStateToProps = (state) => {
    return {
        data: state.todo.data
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addTodoData: (data) => dispatch(addTodoData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);