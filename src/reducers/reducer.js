const defaultState = {
    categories: [],
    activities: [],
    currentUser: {id: 1, username:'Mocha', name:'Mokhtar', password:'1234', email: 'joemokhtarali@gmail.com',image:''}
}

function reducer(state = defaultState, action) { 
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
        case 'ASSIGN_USER':
            return {
                ...state, currentUser: action.payload.user
            }

        default:
            return state
    }
}

export default reducer 