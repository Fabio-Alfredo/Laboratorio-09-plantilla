import React, {useEffect} from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { HiOutlinePlus } from "react-icons/hi";
import PostForm from "../components/PostForm";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const { user, isLoading } = useContext(AuthContext);

  const { data, error, loading } = useFetch(`${URL}/api/posts`);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createPosts=(newPost)=>{
    setPosts([...posts, newPost ]);
  }

  useEffect(() => {
    if(data){
      setPosts(data);
    }
  }, [data]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  if(isLoading) return <p>Loading...</p>

  return (
    <div className="min-h-screen ">
      <Header user={user} />
      <main className="pt-24 p-6 flex flex-col items-center">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} author={post.author} />
        ))}

        <button
          onClick={openModal}
          className="fixed bottom-8 right-12 lg:right-24 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          <HiOutlinePlus size={20} />
        </button>
        {isModalOpen && (
          <div
            onClick={closeModal}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <PostForm closeModal={closeModal} createPosts={createPosts} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
