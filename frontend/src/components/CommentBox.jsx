// CommentBox component
import React from 'react';

const CommentBox = ({ comments }) => {
  return (
    <div className="comment-box">
      {comments.map((comment, idx) => (
        <div key={idx} className="comment">
          <strong>{comment.user.username}:</strong> {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
