import axios from 'axios';
import _ from 'lodash';


let apiUrl = `https://public-api.wordpress.com/rest/v1.1/sites/www.lawnews385264377.wordpress.com/posts/?category=`;

export const actionTypes = {
    GET_CATEGORY: "GET_CATEGORY",
    GET_CATEGORIES: "GET_CATEGORIES"
}

const handleHeaderArticles = (categories) => {
    for(let category in categories){
        let partitioned = _.partition(categories[category], (article) => {
            return article.categories['שער'];
        });
        let headers = partitioned[0]
        let regulars = partitioned[1]

        categories[category] = regulars;
        categories["הכתבות החמות"] = categories["הכתבות החמות"].concat(headers)
    }
    return categories;
}

export const getCategories = (callback) => {
    return dispatch => {
        let ezrahi = () => axios.get(apiUrl + "משפט אזרחי");
        let plili =() => axios.get(apiUrl + "משפט פלילי");
        let nadlan =() => axios.get(apiUrl + "נדל״ן ומיסוי");
        let yerooshot =() => axios.get(apiUrl + "צוואות וירושות");
        let maamarim =() => axios.get(apiUrl + "מאמרים ודעות");

        axios.all([ezrahi(),plili(),nadlan(),yerooshot(),maamarim()]).then(axios.spread((ezrahi,plili,nadlan,yerooshot,maamarim) => {
            let categories = {
                ["הכתבות החמות"]: [],
                ["משפט פלילי"]: plili.data.posts,
                ["משפט אזרחי"]: ezrahi.data.posts,
                ["נדל״ן ומיסוי"]: nadlan.data.posts,
                ["צוואות וירושות"]: yerooshot.data.posts,
                ["מאמרים ודעות"]: maamarim.data.posts
            }
            categories = handleHeaderArticles(categories);

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