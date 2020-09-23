import axios from 'axios';

let ajax = axios.create({
    timeout: 5000,
    baseURL:'http://127.0.0.1:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

ajax.interceptors.response.use(function(res) {
    const result = res.data
    if (result.code === 200) {
        return res;
    } else {
        return Promise.reject(res.message);
    }
}, function(error) {
    return Promise.reject(error.message);
});

function httpGet(url,params={}){
    return ajax.get(url, {params:params}).then(res => res.data.data);
}

function httpPost(url,params={}){
    let paramsArray = [];
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    return ajax.post(url, JSON.stringify(params)).then(res => res.data.data);
}

module.exports = {
    httpGet: httpGet,
    httpPost: httpPost,
}

