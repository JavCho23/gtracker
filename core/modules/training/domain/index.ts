import type Exercise from "../../exercise/domain";

type Training = {
  id: string;
  exercises: Array<Exercise>;
  date: Date;
};

export default Training;
