import createStore from 'redux-zero';

const initialState = 
{
    activeKey: 0,
}

const store = createStore(initialState);
export default store;