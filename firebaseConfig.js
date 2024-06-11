import { initializeApp,  } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "",
  databaseURL: "RTDB_URL",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }