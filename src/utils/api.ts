import { db, auth } from "../../fireBaseConfig";
import { doc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Create user with email and password

export const signUpWithEmail = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: username,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

// Sign in with email and password

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getDailyIdeas = async () => {
  const userRef = doc(db, "ideaTree", "userUID");
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    console.log("All good");
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};
