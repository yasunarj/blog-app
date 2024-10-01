import "./CreatePost.css";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase"; 
import { useNavigate } from "react-router-dom"; 

interface PostState {
  title: string;
  article: string;
}

interface CreateProps {
  isAuth: boolean
}

const CreatePost: React.FC<CreateProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  const [ postData, setPostData ] = useState<PostState>({ title: "", article: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setPostData((prev) => ({
      ...prev, [id]: value
    }))
  }

  const postButton = async () => {
    await addDoc(collection(db, "posts"), {
      title: postData.title,
      article: postData.article,
      author: {
        username: auth.currentUser!.displayName,
        id: auth.currentUser!.uid
      }
    }).then(() => { navigate("/") })
  }

  useEffect(() => {
    if(!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);


  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h2>記事を投稿する</h2>
        <div className="inputPost">
          <div>
            <label htmlFor="title">タイトル</label>
          </div>
          <input type="text" value={postData.title} id="title" placeholder="タイトル" onChange={(e) => {
            handleChange(e);
          }}/>
        </div>
        <div className="inputPost">
          <div>
            <label htmlFor="article">投稿</label>
          </div>
          <textarea id="article" value={postData.article} placeholder="記事を入力する" onChange={(e) => {
            handleChange(e);
          }}></textarea>
        </div>
        <button onClick={postButton}>投稿する</button>
      </div>
    </div>
  );
};

export default CreatePost;
