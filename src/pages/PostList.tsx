import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../store";
interface Post {
  id: number;
  name: string;
  email: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: Post) => {
    dispatch(setSelectedPost(post));

    navigate(`/post/${post.id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Post List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              onClick={() => handlePostClick(post)}
              style={{ cursor: "pointer" }}
            >
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
