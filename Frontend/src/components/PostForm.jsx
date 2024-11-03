import React, { useState } from "react";
import InputField from "./InputFiels";  
import usePost from "../hooks/usePost";

const URL = import.meta.env.VITE_BASE_URL;

const PostForm = ({ closeModal, createPosts}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { postData } = usePost(`${URL}/api/posts`);

  const handleSubmitCreatePost = async (e) => {
    e.preventDefault();

    try{
      const res = await postData({ title, content });
      createPosts(res.post);
      alert(res.message);
      setTitle("");
      setContent("");
      closeModal();
    }catch(e){
      alert("Error" + e.message);
    }


  };

  return (

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-2/3 lg:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md mt-10"
      >
        <form onSubmit={handleSubmitCreatePost} className="space-y-4">
          <InputField
            label="Título del Post"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <InputField
            label="Contenido del Post"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            as="textarea"
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>

  );
};

export default PostForm;
