import React from "react";
import { useParams } from "react-router-dom";
import PostDetails from "../components/PostDetails";

const PostDetailsPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = {
    id: Number(postId),
    name: "Post Name",
    email: "post@example.com",
    username: "name",
    website: "www.example.com",
  };

  return (
    <div>
      <PostDetails post={post} />
    </div>
  );
};

export default PostDetailsPage;
