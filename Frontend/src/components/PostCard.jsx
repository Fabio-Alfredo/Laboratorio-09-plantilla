import React from "react";

const PostCard = ({post, author}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4 break-words">{post.content}</p>
        <div className="flex flex-col w-full ">
          <span className="text-gray-500 text-sm ">Autor: {author.username}</span>
          <span className="text-gray-400 text-xs pt-2 text-center">{author.email}</span>
        </div>
      </div>
    </>
  );
};

export default PostCard;
