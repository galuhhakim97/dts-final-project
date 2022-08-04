import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ9OxV2PfUbzdbLe9URFCSVHRWrFQk24o",
  authDomain: "pair-46-dts-mini-project.firebaseapp.com",
  projectId: "pair-46-dts-mini-project",
  storageBucket: "pair-46-dts-mini-project.appspot.com",
  messagingSenderId: "216049281608",
  appId: "1:216049281608:web:c9b920785b2c3d30f1867d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
   try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

const keluarDariApps = async () => {

  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};


export {
  auth, 
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
};