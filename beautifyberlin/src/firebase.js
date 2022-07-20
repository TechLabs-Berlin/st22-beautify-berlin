import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAB203PEgakRMOkrVArLFoyDmirbTl1Zsw",
  authDomain: "beautify-berlin.firebaseapp.com",
  projectId: "beautify-berlin",
  storageBucket: "beautify-berlin.appspot.com",
  messagingSenderId: "304466258929",
  appId: "1:304466258929:web:d5fbcdafac96289072f250",
  measurementId: "G-0B7PXB4EJH",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
