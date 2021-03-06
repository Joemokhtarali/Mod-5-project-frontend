const defaultState = {
    categories: [],
    activities: [],
    currentUser: null //{id: 1, username:'Mocha', city:'New York City', password:'1234', image:"https://www.sackettwaconia.com/wp-content/uploads/default-profile.png"}
}



function reducer(state = defaultState, action) {
    switch (action.type) {

        case 'FETCH_CATEGORIES':
            return {
                ...state, categories: action.payload.categories
            }
        case 'FETCH_ACTIVITIES':
            // let currentActivities = action.payload.activities.forEach((activity) =>
            //     parseDate(activity.date)
            // );
            return {
                ...state, activities: action.payload.activities
            }
        case 'ADD_CATEGORY':
            return {
                ...state, categories: [...state.categories, action.payload]
            }

        case 'ADD_ACTIVITY': 
        console.log(action.payload);
        
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



