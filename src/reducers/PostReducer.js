import _ from 'lodash';
import * as types from '../types/posts';


console.log("Inside Post Reducer"+ types.FETCH_POSTS)


export default function(state ={},action) {
  switch (action.type) {
    case types.FETCH_POST:
        return { ...state , [action.payload.data.id] : action.payload.data };
    case types.FETCH_POSTS:
        return { ...state, posts: action.payload.data }
    case types.CREATE_POST:
        return null;
    case types.DELETE_POST:
        return _.omit(state,action.payload);
    default:
        return state;
  }
}

export const getPostList = state => state.posts.posts;