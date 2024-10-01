import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCfX8jTxJGMBkiP50-rBQHhQAwXDQmi40A",
  authDomain: "my-blog-41933.firebaseapp.com",
  projectId: "my-blog-41933",
  storageBucket: "my-blog-41933.appspot.com",
  messagingSenderId: "411849523849",
  appId: "1:411849523849:web:fc3ec56e88dc2fb96dfc58",
  measurementId: "G-SMND5HCT3H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

// const analytics = getAnalytics(app);


// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });