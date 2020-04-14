export const fetchCateogriesCreator = () => dispatch => {
    fetch('http://localhost:3000/categories').then(resp => resp.json()).then(data => {
        dispatch({ type: 'FETCH_CATEGORIES', payload: { categories: data } })
    })
}
export const fetchActivitiesCreator = () => dispatch => {
    fetch('http://localhost:3000/activities').then(resp => resp.json()).then(data => {
        dispatch({ type: 'FETCH_ACTIVITIES', payload: { activities: data } })
    })
}

export const fetchPostActivityCreator = (data) => dispatch => {
    fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(response => {
        dispatch({ type: 'ADD_ACTIVITY', payload: response })
    })
}
export const fetchPatchActivityCreator = (id, data) => dispatch => {
    fetch(`http://localhost:3000/activities/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(response => {
        dispatch({ type: 'EDIT_ACTIVITY', payload: response })
    })
}




export const fetchDeleteActivityCreator = (id) => dispatch => {
    fetch(`http://localhost:3000/activities/${id}`, {
            method: "DELETE"
        })
        dispatch({ type: 'DELETE_ACTIVITY', payload: id})
}


export const assignCurrentUser = (user) => ({type: 'ASSIGN_USER', payload: user})  

export const removeCurrentUser = () => ({type: 'REMOVE_USER'})