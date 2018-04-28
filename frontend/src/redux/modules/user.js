//imports


// actions

// action creators

// initial create

const initialState = {
    isLoggedIn: localStorage.getItem('JWT') || false
}

// reducer

function reducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
            break;
    }
}

// reducer functions

// exports

// reducer exports

export default reducer;