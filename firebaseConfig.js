import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBn1EdARE67aR2mU9kblx5G7QLmSY4te88",
    authDomain: "cart-36896.firebaseapp.com",
    databaseURL: "https://cart-36896-default-rtdb.firebaseio.com",
    projectId: "cart-36896",
    storageBucket: "cart-36896.appspot.com",
    messagingSenderId: "110035739045",
    appId: "1:110035739045:web:c320d827bbae1fffb1884c",
    measurementId: "G-CT6WB155Y4"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);