const { createStore } = require('redux');

const intialState = {
    age: 21
};

const myReducer = (state = intialState, action) => {
    const newState = {...state};
    if (action.type === 'ADD'){
        newState.age += action.val;
    }
    if (action.type === 'SUBTRACT'){
        newState.age -= action.val;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe (() => {
    console.log('state cahnged' + JSON.stringify(store.getState()));

})

//Have to put value in the reducer if statement.
//store.dispatch({type:'ADD'});
//store.dispatch({type:'SUBTRACT'}); 

store.dispatch({type:'ADD', val:100}); // payload sae should be 121
store.dispatch({type:'SUBTRACT', val:5}); // 116
