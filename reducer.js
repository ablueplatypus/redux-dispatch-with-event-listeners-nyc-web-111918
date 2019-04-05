let state; //= {count: 0}

function reducer(state= {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function dispatch(action){
    state = reducer(state, action)
    render()
}

function render(){
    let container = document.querySelector('#container');
    container.textContent = state.count;
}

dispatch({type: 'beef'})

let button = document.querySelector('#button');

button.addEventListener('click', () => {
    // here the dispatch is resetting state. like setState would in React.
    //The state is being set to the action type that we would like to update. 
    dispatch({type: 'INCREASE_COUNT'})
})
