import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  type DocumentData,
} from "firebase/firestore/lite";
import type { User } from "firebase/auth";
import { firestore } from ".";

export async function getExercises() {
  const exercisesCollection = collection(firestore, "exercises");
  const exercisesSnapshot = await getDocs(exercisesCollection);
  return exercisesSnapshot.docs.map((doc) => doc.data());
}

export async function getTrainings(user: User) {
  const trainingsCollection = collection(
    firestore,
    "users",
    user.uid,
    "trainings"
  );

  // Hacer consulta para los entrenamientos de esta persona
}

export async function saveUser(user: User) {
  const docRef = await setDoc(doc(firestore, "users", user.uid), {
    displayName: user.displayName,
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
  });
  console.log(docRef);
  return getUserOrSaveIt(user);
}

export async function getUserOrSaveIt(user: User): Promise<DocumentData> {
  const savedUser = await getDoc(doc(firestore, "users", user.uid));
  const data = savedUser.data();
  if (data != undefined) {
    return data;
  }
  return saveUser(user);
}
