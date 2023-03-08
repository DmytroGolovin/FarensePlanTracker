import { WorkoutExerciseModel } from "./workout-exercise.model";

export interface WorkoutModel {
  id: string;
  title: string;
  description?: string;
  objectives?: string;
  exercises: WorkoutExerciseModel;
}
