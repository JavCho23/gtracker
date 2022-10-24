import type { User } from "firebase/auth";
import { reactive } from "vue";

type UserState = {
  user: null | User;
};

const savedUser = localStorage.getItem("user");

const initialState: UserState = {
  user: savedUser ? JSON.parse(savedUser) : null,
};

export const userState = reactive(initialState);
