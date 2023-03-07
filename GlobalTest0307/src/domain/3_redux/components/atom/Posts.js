import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../store/4_redux";
import { MockPosts } from "../../../../__mock__/mockPosts";
import Post from "./Post/Post";

const AllPosts = ({ posts }) => {
  const dispatch = useDispatch();
  //const posts = useSelector(state => state.posts);

  const handleAddPost = () => {
    const newPost = { id:  Math.floor(Math.random() * 100000), 
      title:MockPosts.title,
      content: "New content" };
    dispatch(addPost(newPost));
  };

  return (
    <div>
      <button onClick={handleAddPost}>Add Post</button>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
