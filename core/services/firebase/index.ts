import { initializeApp } from "firebase/app";
import Config from "../../config";

export const App = initializeApp(Config.firebase);
