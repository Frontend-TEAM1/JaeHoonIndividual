import React, { createContext, useReducer } from "react";

const initialState = {
  userList: [{ id: 1, name: "홍길동", nickname: "히히" }],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
      case "ADD_EDIT_MODE":
      return {
       ...state,
        userList: state.userList.map((user) => ({
      ...user,
      isEdit: true,
       })),
       };

       case "RESET_LIST":
        return{
          ...state,
          userList:[],
        }
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

 

