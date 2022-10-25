import { App } from "../index";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  type UserCredential,
} from "firebase/auth";

import { getUserOrSaveIt } from "../../firestore/user";
const provider = new GoogleAuthProvider();

export const Authorization = getAuth(App);

export async function singIn() {
  const result = (await new Promise((resolve, reject) => {
    signInWithPopup(Authorization, provider)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  })) as UserCredential;
  const credential = GoogleAuthProvider.credentialFromResult(result);
  if (!credential || !credential.accessToken) {
    throw new Error("Invalid credentials");
  }
  const token = credential.accessToken;
  const user = result.user;
  await getUserOrSaveIt(user);
  return { token, user };
}
