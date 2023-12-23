import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsadvYFlVJ0E4tUMPSyztmHloUsoC3GEc",
    authDomain: "injecttech-128fd.firebaseapp.com",
    projectId: "injecttech-128fd",
    storageBucket: "injecttech-128fd.appspot.com",
    messagingSenderId: "258218684684",
    appId: "1:258218684684:web:4e74f1e9eb0105b4961929",
    measurementId: "G-2QRS4TX9J8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
