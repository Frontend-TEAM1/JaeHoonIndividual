

const ReducerQ1List = ({ ingredients,deleteIngredient}) => {

  
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={()=>deleteIngredient(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
