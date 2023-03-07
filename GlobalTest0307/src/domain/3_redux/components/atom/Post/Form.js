import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../../store/4_redux";

const PostForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;
    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
    };
    onSubmit(newPost);
    form.reset();
  };

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="title" placeholder="제목" />
        </label>
        <label>
          <input type="text" name="content" placeholder="내용" />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
