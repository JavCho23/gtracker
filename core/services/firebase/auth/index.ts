import { App } from "../index";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Authorization = getAuth(App);

export function singIn() {
  return new Promise((resolve, reject) => {
    signInWithPopup(Authorization, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error("Invalid credentials");
        }
        const token = credential.accessToken;
        const user = result.user;
        resolve({ user, token });
        // ...
      })
      .catch((error) => {
        reject(error);
      });
  });
}
