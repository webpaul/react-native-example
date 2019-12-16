import { combineReducers, createStore, } from 'redux';
import { connect } from 'react-redux';
   
const testAction = () => ({
    type: 'TEST_ACTION',
});
   
var testReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                content: "Hello Redux",
                count: state.count+1
            };
        default:
            return state;
    }
};
   
const mapStateToProps = (state) => ({
    testReducer: state.testReducer,
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => {
            dispatch(testAction())
        }
    }
};
  
export const redux = {
    connect: connect(mapStateToProps, mapDispatchToProps),
    store: createStore(combineReducers({
        testReducer,
    }))
}
