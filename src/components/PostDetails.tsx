import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
interface PostDetailsProps {
  post: {
    id: number;
    name: string;
    email: string;
    username: string;
    website: string;
  } | null;
}

const PostDetails: React.FC<PostDetailsProps> = () => {
  const post = useSelector((state: RootState) => state.selectedPost);

  if (!post) {
    return <div>Please select a post to view details.</div>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <p>ID: {post.id}</p>
      <p>Name: {post.name}</p>
      <p>Email: {post.email}</p>
      <p>Username: {post.username}</p>
      <p>Website: {post.website}</p>
    </div>
  );
};

export default PostDetails;
