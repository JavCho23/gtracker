import { singIn } from "../firebase/auth";

export async function login() {
  const result = await singIn();
  const { user, token } = result;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}
