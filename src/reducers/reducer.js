const defaultState = {
    categories: [],
    activities: [], 
    currentUser: 1
}

function reducer(state = defaultState, action) {
    switch (action.type) {

        case 'FETCH_CATEGORIES': 
            return {
                ...state, categories: action.payload.categories
            }
        case 'FETCH_ACTIVITIES':
            let sortedActivities = action.payload.activities.slice().sort((a, b) => b.date - a.date)
            return {
                ...state, activities: sortedActivities
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