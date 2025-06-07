import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZOp4UqRFxiqFQBzltKppn4YwaIGsDFns",
  authDomain: "proyecto-react-js-b6c70.firebaseapp.com",
  projectId: "proyecto-react-js-b6c70",
  storageBucket: "proyecto-react-js-b6c70.firebasestorage.app",
  messagingSenderId: "853402466878",
  appId: "1:853402466878:web:269a83a247ffa489afef6f"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database