import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import "./Home.css";

type Post = {
  title: string;
  author: { username: string; id: string };
  article: string;
};

type PostState = {
  title: string;
  author: { username: string; id: string };
  article: string;
  id: string;
}[];

const Home = () => {
  const [postData, setPostData] = useState<PostState>([]);

  useEffect(() => {
    const getData = async () => {
      const allData = await getDocs(collection(db, "posts"));
      const posts: PostState = allData.docs.map((doc) => ({
        ...(doc.data() as Post),
        id: doc.id,
      }));
      setPostData(posts);
    };
    getData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id)).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="postParent">
      {postData.map((data, index) => {
        return (
          <div key={index} className="homePage">
            <div className="postContents">
              <div className="postHeader">
                <h2>{data.title}</h2>
              </div>
              <div className="postTextContainer">{data.article}</div>
              <div className="nameAndDeleteButton">
                <h3>@{data.author.username}</h3>
                {data.author.id === auth.currentUser?.uid && (
                  <button
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    削除
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
