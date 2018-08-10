import axios from 'axios';

let apiUrl = `https://public-api.wordpress.com/rest/v1.1/sites/www.lawnews385264377.wordpress.com/posts/?category=`;

export const actionTypes = {
    GET_CATEGORY: "GET_CATEGORY",
    GET_CATEGORIES: "GET_CATEGORIES"
}

export const getCategories = (callback) => {
    return dispatch => {
        let plili = () => axios.get(apiUrl + "פלילי");
        let calcali =() => axios.get(apiUrl + "כלכלי");

        axios.all([plili(),calcali()]).then(axios.spread((plili, calcali) => {
            let categories = {
                ["כלכלי"]: calcali.data.posts,
                ["פלילי"]: plili.data.posts
            }
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories
            })

            if(callback){
                callback()
            }
        }))
    }
}

export const getCategory = (name) => {
    return dispatch => {
        axios.get(apiUrl + name).then(({data}) => {
            dispatch({
                type: actionTypes.GET_CATEGORY,
                category: { name, posts: data.posts}
            })
        })
    }
}