import axios from 'axios';
import * as types from '../types/posts';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=ajay1234";

console.log("inside action creator");
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    // console.log(request);
    return {
        type : types.FETCH_POSTS,
        payload : request
    }
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values).then(() => callback());

    return {
        type : types.CREATE_POST,
        payload : request
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type : types.FETCH_POST,
        payload : request
    }
}

export function deletePost(id,callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());
    return {
        type : types.DELETE_POST,
        payload : id
    }
}