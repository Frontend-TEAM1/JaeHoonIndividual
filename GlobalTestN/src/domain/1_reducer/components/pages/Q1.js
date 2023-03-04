import React, { useReducer } from "react";
import { reducer } from "../../../../store/1_reducer";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";


const initialState = {
  ingredients: [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ],
};



const ReducerQ1Page = () => {
/* 
 1. store에 reducer만들어두기.

 2. useReducer, dispatch 정의하기

 3. 추가/삭제 함수 만들기

 4. 컴포넌트에 알맞게 전달하기.
*/

  const [state, dispatch] = useReducer(reducer, initialState);

  const addIngredient = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const id = state.ingredients.length + 1;
    
    dispatch({
      type: "ADD_INGREDIENT",
      payload: { id, name, price: Number(price) },
    });
    event.target.reset();
    
  };

  const deleteIngredient = (id) => {
    dispatch({
      type: "DELETE_INGREDIENT",
      payload: id,
    });
  };



  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={state.ingredients} 
        deleteIngredient={deleteIngredient}
        />
      </table>
      <Q1Form onSubmit={addIngredient} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};

export default ReducerQ1Page;

