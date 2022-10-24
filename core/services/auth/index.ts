import { singIn } from "../firebase/auth";

export async function login() {
  const result = await singIn();
  console.log(result);
}
