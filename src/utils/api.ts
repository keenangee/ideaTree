import { db } from "../../fireBaseConfig";
import { doc, getDoc } from "firebase/firestore";

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
