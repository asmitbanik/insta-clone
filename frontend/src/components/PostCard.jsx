// PostCard component
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.user.username}</h3>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" />}
    </div>
  );
};

export default PostCard;
