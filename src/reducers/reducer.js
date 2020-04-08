const defaultState = {
    categories: [],
    activities: [],
    currentUser: { id: 1, username: 'Mocha', name: 'Mokhtar', password: '1234', email: 'joemokhtarali@gmail.com', image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71000419_531421064288637_8191439997199450112_n.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=LjaGLtgohSUAX_1Po4C&_nc_ht=scontent-lga3-1.xx&oh=4475aa15dcadd81ebc8aa883b9724825&oe=5EB43E3B' }
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
        case 'EDIT_ACTIVITY':
            let activitiesCopy = [...state.activities]
            let activityIndex = activitiesCopy.findIndex(activity => activity.id === action.payload.id)
            activitiesCopy[activityIndex] = action.payload

            return {
                ...state, activities: activitiesCopy
            }
        case 'DELETE_ACTIVITY':
            let activitiesAd = [...state.activities.filter(act => act.id !== action.payload)]
            console.log(activitiesAd);
            
            return {
                ...state, activities: activitiesAd
            }


        case 'ASSIGN_USER':
            return {
                ...state, currentUser: action.payload
            }
        case 'REMOVE_USER':
            return {
                ...state, currentUser: null
            }

        default:
            return state
    }
}

export default reducer