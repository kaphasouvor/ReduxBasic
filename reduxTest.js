const {createStore} = require('redux');
const initState = {
    todos: [],
    post:[]
}

function myreducer(state = initState, action) {
    if (action.type == 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    if (action.type == 'ADD_POST') {
        return {
            ...state,
            post: [...state.post, action.post]
        }
    }
}

const store = createStore(myreducer);

store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
})

store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
store.dispatch({type: 'ADD_TODO', todo: 'sleep some more'});
store.dispatch({type: 'ADD_POST', post: 'exercise more'});
store.dispatch({type: 'ADD_POST', post: 'code everyday'});