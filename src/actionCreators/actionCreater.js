export const fetchCateogriesCreator = () => dispatch => {
    fetch('http://localhost:3000/categories').then(resp => resp.json()).then(data => {
        dispatch({type: 'FETCH_CATEGORIES', payload: {categories: data}})
    })
}
export const fetchActivitiesCreator = () => dispatch => {
    fetch('http://localhost:3000/activities').then(resp => resp.json()).then(data => {
        dispatch({type: 'FETCH_ACTIVITIES', payload: {activities: data}})
    })
}

export const assignCurrentUser = (user) => ({type: 'ASSIGN_USER', payload: user}) 