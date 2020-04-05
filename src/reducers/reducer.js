const defaultState = {
    categories: [],
    activities: [],
    currentUser: null
}

function reducer(state = defaultState, action) {
    // console.log('in reducer', action, state)
    switch (action.type) {

        case 'FETCH_CATEGORIES':
            return {
                ...state, categories: action.payload.categories
            }
        case 'FETCH_ACTIVITIES':
            return {
                ...state, activities: action.payload.activities
            }
        case 'ADD_CATEGORY':
            return {
                ...state, categories: [...state.categories, action.payload]
            }
        case 'ADD_ACTIVITY':
            return {
                ...state, activities: [...state.activities, action.payload]
            }
        // case 'CURRENT_USER':
        //     return {
        //         ...state, currentUser: action.payload
        //     }

        default:
            return state
    }
}

export default reducer 