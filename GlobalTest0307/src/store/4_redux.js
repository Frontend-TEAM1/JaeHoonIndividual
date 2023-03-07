import { faker } from "@faker-js/faker";
import { MockPosts } from "../__mock__/mockPosts";
import shortId from "shortid";

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

const initialState = MockPosts(10);

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          User: {
            id: shortId.generate(),
            nickName: faker.name.firstName(),
            profileImg: faker.image.image(),
          },
          Post_img: Array(Math.floor(Math.random() * 3) + 1)
            .fill()
            .map(() => faker.image.imageUrl()),
          Comments: [],
          createdAt: faker.date.between(
            "2023-01-01T00:00:00.000Z",
            "2023-01-31T00:00:00.000Z"
          ),
          myPost: true,
        },
      ];
    case "REMOVE_POST":
      return [state.filter((post) => post.id !== action.payload)];

    case "ADD_COMMENT":
      return state;
    default:
      return state;
  }
};
