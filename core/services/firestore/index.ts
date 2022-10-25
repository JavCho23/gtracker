import { getFirestore } from "firebase/firestore/lite";
import { App } from "../firebase";

export const firestore = getFirestore(App);
