
import { combineReducers } from 'redux'
import { MockPosts } from '../__mock__/mockPosts';


export const removePost = (id) => ({
  type: "REMOVE_POST",
  payload: id,
});

export const editPost = (id, title, content) => ({
  type: "EDIT_POST",
  payload: {
    id,
    title,
    content,
  },
});

export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

const initialState = {
  posts: MockPosts(10),
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
      case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload.updatedPost : post
        ),
      };
    default:
      return state;
  }
};


export const rootReducer = combineReducers({ postReducer })

// 액션 생성자 함수 정의
/*
export const addPost = (title, content) => ({
  type: "ADD_POST",
  payload: {
    id: new Date().getTime().toString(),
    title,
    content,
  },
});
*/

// 초기 상태 정의
//const initialState = [];

// 리듀서 정의
/*
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.payload.id
          ? { ...post, title: action.payload.title, content: action.payload.content }
          : post
      );
    default:
      return state;
  }
};
*/
